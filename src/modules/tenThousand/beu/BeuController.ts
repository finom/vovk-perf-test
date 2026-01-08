import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("beu")
export default class BeuController {
  @operation({
    summary: "Get Beu",
  })
  @get()
  static getBeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beu",
  })
  @post("{id}")
  static createBeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
