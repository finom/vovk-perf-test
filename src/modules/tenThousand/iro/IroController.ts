import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iro")
export default class IroController {
  @operation({
    summary: "Get Iro",
  })
  @get()
  static getIro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iro",
  })
  @post("{id}")
  static createIro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
