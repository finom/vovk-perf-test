import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lje")
export default class LjeController {
  @operation({
    summary: "Get Lje",
  })
  @get()
  static getLje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lje",
  })
  @post("{id}")
  static createLje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
