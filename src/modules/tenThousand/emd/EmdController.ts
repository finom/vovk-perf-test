import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emd")
export default class EmdController {
  @operation({
    summary: "Get Emd",
  })
  @get()
  static getEmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emd",
  })
  @post("{id}")
  static createEmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
