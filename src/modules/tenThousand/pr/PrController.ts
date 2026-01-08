import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pr")
export default class PrController {
  @operation({
    summary: "Get Pr",
  })
  @get()
  static getPr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pr",
  })
  @post("{id}")
  static createPr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
