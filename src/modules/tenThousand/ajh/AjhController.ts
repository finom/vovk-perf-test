import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ajh")
export default class AjhController {
  @operation({
    summary: "Get Ajh",
  })
  @get()
  static getAjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajh",
  })
  @post("{id}")
  static createAjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
