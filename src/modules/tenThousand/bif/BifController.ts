import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bif")
export default class BifController {
  @operation({
    summary: "Get Bif",
  })
  @get()
  static getBif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bif",
  })
  @post("{id}")
  static createBif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
