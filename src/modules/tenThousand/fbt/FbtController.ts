import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbt")
export default class FbtController {
  @operation({
    summary: "Get Fbt",
  })
  @get()
  static getFbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbt",
  })
  @post("{id}")
  static createFbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
