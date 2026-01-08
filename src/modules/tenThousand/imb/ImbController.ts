import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imb")
export default class ImbController {
  @operation({
    summary: "Get Imb",
  })
  @get()
  static getImb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imb",
  })
  @post("{id}")
  static createImb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
