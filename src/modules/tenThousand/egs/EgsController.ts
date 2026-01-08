import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egs")
export default class EgsController {
  @operation({
    summary: "Get Egs",
  })
  @get()
  static getEgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egs",
  })
  @post("{id}")
  static createEgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
