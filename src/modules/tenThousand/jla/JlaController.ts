import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jla")
export default class JlaController {
  @operation({
    summary: "Get Jla",
  })
  @get()
  static getJla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jla",
  })
  @post("{id}")
  static createJla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
