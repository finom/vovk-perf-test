import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oa")
export default class OaController {
  @operation({
    summary: "Get Oa",
  })
  @get()
  static getOa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oa",
  })
  @post("{id}")
  static createOa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
