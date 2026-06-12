import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfu")
export default class BfuController {
  @operation({
    summary: "Get Bfu",
  })
  @get()
  static getBfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfu",
  })
  @post("{id}")
  static createBfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
