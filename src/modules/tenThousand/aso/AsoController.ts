import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aso")
export default class AsoController {
  @operation({
    summary: "Get Aso",
  })
  @get()
  static getAso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aso",
  })
  @post("{id}")
  static createAso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
