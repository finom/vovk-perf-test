import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cs")
export default class CsController {
  @operation({
    summary: "Get Cs",
  })
  @get()
  static getCs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cs",
  })
  @post("{id}")
  static createCs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
