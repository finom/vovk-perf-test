import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgo")
export default class BgoController {
  @operation({
    summary: "Get Bgo",
  })
  @get()
  static getBgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgo",
  })
  @post("{id}")
  static createBgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
