import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjg")
export default class HjgController {
  @operation({
    summary: "Get Hjg",
  })
  @get()
  static getHjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjg",
  })
  @post("{id}")
  static createHjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
