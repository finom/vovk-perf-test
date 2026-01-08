import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajb")
export default class AjbController {
  @operation({
    summary: "Get Ajb",
  })
  @get()
  static getAjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajb",
  })
  @post("{id}")
  static createAjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
