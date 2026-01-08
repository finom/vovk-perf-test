import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilo")
export default class IloController {
  @operation({
    summary: "Get Ilo",
  })
  @get()
  static getIlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilo",
  })
  @post("{id}")
  static createIlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
