import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhg")
export default class LhgController {
  @operation({
    summary: "Get Lhg",
  })
  @get()
  static getLhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhg",
  })
  @post("{id}")
  static createLhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
