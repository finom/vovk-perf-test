import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("las")
export default class LasController {
  @operation({
    summary: "Get Las",
  })
  @get()
  static getLas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Las",
  })
  @post("{id}")
  static createLas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
