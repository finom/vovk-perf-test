import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bel")
export default class BelController {
  @operation({
    summary: "Get Bel",
  })
  @get()
  static getBel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bel",
  })
  @post("{id}")
  static createBel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
