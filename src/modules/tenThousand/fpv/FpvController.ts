import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpv")
export default class FpvController {
  @operation({
    summary: "Get Fpv",
  })
  @get()
  static getFpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpv",
  })
  @post("{id}")
  static createFpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
