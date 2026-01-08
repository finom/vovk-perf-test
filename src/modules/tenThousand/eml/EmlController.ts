import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eml")
export default class EmlController {
  @operation({
    summary: "Get Eml",
  })
  @get()
  static getEml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eml",
  })
  @post("{id}")
  static createEml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
