import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvs")
export default class BvsController {
  @operation({
    summary: "Get Bvs",
  })
  @get()
  static getBvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvs",
  })
  @post("{id}")
  static createBvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
