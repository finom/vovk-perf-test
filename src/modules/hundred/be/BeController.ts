import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("be")
export default class BeController {
  @operation({
    summary: "Get Be",
  })
  @get()
  static getBe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Be",
  })
  @post("{id}")
  static createBe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
