import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpp")
export default class GppController {
  @operation({
    summary: "Get Gpp",
  })
  @get()
  static getGpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpp",
  })
  @post("{id}")
  static createGpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
