import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cky")
export default class CkyController {
  @operation({
    summary: "Get Cky",
  })
  @get()
  static getCky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cky",
  })
  @post("{id}")
  static createCky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
