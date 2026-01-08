import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fph")
export default class FphController {
  @operation({
    summary: "Get Fph",
  })
  @get()
  static getFph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fph",
  })
  @post("{id}")
  static createFph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
