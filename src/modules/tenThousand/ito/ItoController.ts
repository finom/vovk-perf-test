import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ito")
export default class ItoController {
  @operation({
    summary: "Get Ito",
  })
  @get()
  static getIto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ito",
  })
  @post("{id}")
  static createIto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
