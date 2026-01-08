import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzs")
export default class BzsController {
  @operation({
    summary: "Get Bzs",
  })
  @get()
  static getBzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzs",
  })
  @post("{id}")
  static createBzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
