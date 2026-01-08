import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eiu")
export default class EiuController {
  @operation({
    summary: "Get Eiu",
  })
  @get()
  static getEiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiu",
  })
  @post("{id}")
  static createEiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
