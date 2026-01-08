import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eas")
export default class EasController {
  @operation({
    summary: "Get Eas",
  })
  @get()
  static getEas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eas",
  })
  @post("{id}")
  static createEas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
