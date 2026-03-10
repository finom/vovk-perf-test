import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbt")
export default class LbtController {
  @operation({
    summary: "Get Lbt",
  })
  @get()
  static getLbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbt",
  })
  @post("{id}")
  static createLbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
