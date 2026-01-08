import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eav")
export default class EavController {
  @operation({
    summary: "Get Eav",
  })
  @get()
  static getEav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eav",
  })
  @post("{id}")
  static createEav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
