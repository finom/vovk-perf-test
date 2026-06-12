import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxm")
export default class BxmController {
  @operation({
    summary: "Get Bxm",
  })
  @get()
  static getBxm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxm",
  })
  @post("{id}")
  static createBxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
