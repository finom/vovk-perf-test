import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nku")
export default class NkuController {
  @operation({
    summary: "Get Nku",
  })
  @get()
  static getNku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nku",
  })
  @post("{id}")
  static createNku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
