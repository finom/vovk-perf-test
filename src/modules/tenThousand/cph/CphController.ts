import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cph")
export default class CphController {
  @operation({
    summary: "Get Cph",
  })
  @get()
  static getCph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cph",
  })
  @post("{id}")
  static createCph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
