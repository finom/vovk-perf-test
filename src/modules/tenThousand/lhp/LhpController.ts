import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhp")
export default class LhpController {
  @operation({
    summary: "Get Lhp",
  })
  @get()
  static getLhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhp",
  })
  @post("{id}")
  static createLhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
