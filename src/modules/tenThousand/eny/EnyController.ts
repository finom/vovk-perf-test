import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eny")
export default class EnyController {
  @operation({
    summary: "Get Eny",
  })
  @get()
  static getEny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eny",
  })
  @post("{id}")
  static createEny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
