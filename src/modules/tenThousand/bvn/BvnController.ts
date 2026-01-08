import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvn")
export default class BvnController {
  @operation({
    summary: "Get Bvn",
  })
  @get()
  static getBvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvn",
  })
  @post("{id}")
  static createBvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
