import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajw")
export default class AjwController {
  @operation({
    summary: "Get Ajw",
  })
  @get()
  static getAjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajw",
  })
  @post("{id}")
  static createAjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
