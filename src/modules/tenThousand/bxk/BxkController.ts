import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxk")
export default class BxkController {
  @operation({
    summary: "Get Bxk",
  })
  @get()
  static getBxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxk",
  })
  @post("{id}")
  static createBxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
