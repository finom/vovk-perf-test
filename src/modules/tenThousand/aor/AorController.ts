import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aor")
export default class AorController {
  @operation({
    summary: "Get Aor",
  })
  @get()
  static getAor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aor",
  })
  @post("{id}")
  static createAor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
