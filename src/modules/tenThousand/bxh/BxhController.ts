import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxh")
export default class BxhController {
  @operation({
    summary: "Get Bxh",
  })
  @get()
  static getBxh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxh",
  })
  @post("{id}")
  static createBxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
