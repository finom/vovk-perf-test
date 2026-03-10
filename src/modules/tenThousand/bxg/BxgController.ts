import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxg")
export default class BxgController {
  @operation({
    summary: "Get Bxg",
  })
  @get()
  static getBxg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxg",
  })
  @post("{id}")
  static createBxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
