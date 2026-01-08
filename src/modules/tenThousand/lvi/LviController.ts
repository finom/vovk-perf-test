import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvi")
export default class LviController {
  @operation({
    summary: "Get Lvi",
  })
  @get()
  static getLvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvi",
  })
  @post("{id}")
  static createLvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
