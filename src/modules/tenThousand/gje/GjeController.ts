import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gje")
export default class GjeController {
  @operation({
    summary: "Get Gje",
  })
  @get()
  static getGje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gje",
  })
  @post("{id}")
  static createGje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
