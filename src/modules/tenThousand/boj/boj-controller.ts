import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boj")
export default class BojController {
  @operation({
    summary: "Get Boj",
  })
  @get()
  static getBoj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boj",
  })
  @post("{id}")
  static createBoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
