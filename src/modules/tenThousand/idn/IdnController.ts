import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idn")
export default class IdnController {
  @operation({
    summary: "Get Idn",
  })
  @get()
  static getIdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idn",
  })
  @post("{id}")
  static createIdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
