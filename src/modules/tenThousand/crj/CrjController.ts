import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crj")
export default class CrjController {
  @operation({
    summary: "Get Crj",
  })
  @get()
  static getCrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crj",
  })
  @post("{id}")
  static createCrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
