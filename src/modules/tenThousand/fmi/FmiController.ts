import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmi")
export default class FmiController {
  @operation({
    summary: "Get Fmi",
  })
  @get()
  static getFmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmi",
  })
  @post("{id}")
  static createFmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
