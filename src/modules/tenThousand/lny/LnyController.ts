import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lny")
export default class LnyController {
  @operation({
    summary: "Get Lny",
  })
  @get()
  static getLny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lny",
  })
  @post("{id}")
  static createLny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
