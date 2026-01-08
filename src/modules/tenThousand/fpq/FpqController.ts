import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpq")
export default class FpqController {
  @operation({
    summary: "Get Fpq",
  })
  @get()
  static getFpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpq",
  })
  @post("{id}")
  static createFpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
