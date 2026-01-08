import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eut")
export default class EutController {
  @operation({
    summary: "Get Eut",
  })
  @get()
  static getEut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eut",
  })
  @post("{id}")
  static createEut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
