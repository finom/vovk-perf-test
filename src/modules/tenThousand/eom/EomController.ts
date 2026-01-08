import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eom")
export default class EomController {
  @operation({
    summary: "Get Eom",
  })
  @get()
  static getEom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eom",
  })
  @post("{id}")
  static createEom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
