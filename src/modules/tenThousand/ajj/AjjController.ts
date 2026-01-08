import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajj")
export default class AjjController {
  @operation({
    summary: "Get Ajj",
  })
  @get()
  static getAjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajj",
  })
  @post("{id}")
  static createAjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
