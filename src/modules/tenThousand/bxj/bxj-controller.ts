import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxj")
export default class BxjController {
  @operation({
    summary: "Get Bxj",
  })
  @get()
  static getBxj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxj",
  })
  @post("{id}")
  static createBxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
