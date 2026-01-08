import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amm")
export default class AmmController {
  @operation({
    summary: "Get Amm",
  })
  @get()
  static getAmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amm",
  })
  @post("{id}")
  static createAmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
