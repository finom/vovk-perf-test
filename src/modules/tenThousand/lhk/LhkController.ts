import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhk")
export default class LhkController {
  @operation({
    summary: "Get Lhk",
  })
  @get()
  static getLhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhk",
  })
  @post("{id}")
  static createLhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
