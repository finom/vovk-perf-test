import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hg")
export default class HgController {
  @operation({
    summary: "Get Hg",
  })
  @get()
  static getHg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hg",
  })
  @post("{id}")
  static createHg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
