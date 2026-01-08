import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuo")
export default class IuoController {
  @operation({
    summary: "Get Iuo",
  })
  @get()
  static getIuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuo",
  })
  @post("{id}")
  static createIuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
