import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ias")
export default class IasController {
  @operation({
    summary: "Get Ias",
  })
  @get()
  static getIas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ias",
  })
  @post("{id}")
  static createIas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
