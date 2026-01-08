import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jva")
export default class JvaController {
  @operation({
    summary: "Get Jva",
  })
  @get()
  static getJva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jva",
  })
  @post("{id}")
  static createJva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
