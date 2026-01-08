import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aut")
export default class AutController {
  @operation({
    summary: "Get Aut",
  })
  @get()
  static getAut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aut",
  })
  @post("{id}")
  static createAut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
