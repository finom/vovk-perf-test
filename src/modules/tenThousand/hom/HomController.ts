import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hom")
export default class HomController {
  @operation({
    summary: "Get Hom",
  })
  @get()
  static getHom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hom",
  })
  @post("{id}")
  static createHom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
