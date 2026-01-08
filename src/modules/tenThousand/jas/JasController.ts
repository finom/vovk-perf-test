import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jas")
export default class JasController {
  @operation({
    summary: "Get Jas",
  })
  @get()
  static getJas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jas",
  })
  @post("{id}")
  static createJas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
