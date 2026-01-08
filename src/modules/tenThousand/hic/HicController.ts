import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hic")
export default class HicController {
  @operation({
    summary: "Get Hic",
  })
  @get()
  static getHic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hic",
  })
  @post("{id}")
  static createHic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
