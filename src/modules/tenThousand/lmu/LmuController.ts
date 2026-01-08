import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmu")
export default class LmuController {
  @operation({
    summary: "Get Lmu",
  })
  @get()
  static getLmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmu",
  })
  @post("{id}")
  static createLmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
