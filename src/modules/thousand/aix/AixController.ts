import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aix")
export default class AixController {
  @operation({
    summary: "Get Aix",
  })
  @get()
  static getAix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aix",
  })
  @post("{id}")
  static createAix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
