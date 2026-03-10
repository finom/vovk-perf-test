import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxw")
export default class BxwController {
  @operation({
    summary: "Get Bxw",
  })
  @get()
  static getBxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxw",
  })
  @post("{id}")
  static createBxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
