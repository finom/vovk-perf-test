import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ero")
export default class EroController {
  @operation({
    summary: "Get Ero",
  })
  @get()
  static getEro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ero",
  })
  @post("{id}")
  static createEro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
