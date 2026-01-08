import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euw")
export default class EuwController {
  @operation({
    summary: "Get Euw",
  })
  @get()
  static getEuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euw",
  })
  @post("{id}")
  static createEuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
