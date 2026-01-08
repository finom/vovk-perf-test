import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iln")
export default class IlnController {
  @operation({
    summary: "Get Iln",
  })
  @get()
  static getIln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iln",
  })
  @post("{id}")
  static createIln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
