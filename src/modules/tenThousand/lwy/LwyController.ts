import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwy")
export default class LwyController {
  @operation({
    summary: "Get Lwy",
  })
  @get()
  static getLwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwy",
  })
  @post("{id}")
  static createLwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
