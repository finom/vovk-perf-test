import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eto")
export default class EtoController {
  @operation({
    summary: "Get Eto",
  })
  @get()
  static getEto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eto",
  })
  @post("{id}")
  static createEto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
