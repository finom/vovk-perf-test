import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfy")
export default class KfyController {
  @operation({
    summary: "Get Kfy",
  })
  @get()
  static getKfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfy",
  })
  @post("{id}")
  static createKfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
