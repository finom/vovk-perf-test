import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("liy")
export default class LiyController {
  @operation({
    summary: "Get Liy",
  })
  @get()
  static getLiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Liy",
  })
  @post("{id}")
  static createLiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
