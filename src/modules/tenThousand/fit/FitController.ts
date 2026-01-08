import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fit")
export default class FitController {
  @operation({
    summary: "Get Fit",
  })
  @get()
  static getFit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fit",
  })
  @post("{id}")
  static createFit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
