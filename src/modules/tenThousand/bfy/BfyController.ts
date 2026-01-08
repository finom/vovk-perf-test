import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfy")
export default class BfyController {
  @operation({
    summary: "Get Bfy",
  })
  @get()
  static getBfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfy",
  })
  @post("{id}")
  static createBfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
