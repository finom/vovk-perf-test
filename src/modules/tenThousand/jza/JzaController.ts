import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jza")
export default class JzaController {
  @operation({
    summary: "Get Jza",
  })
  @get()
  static getJza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jza",
  })
  @post("{id}")
  static createJza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
