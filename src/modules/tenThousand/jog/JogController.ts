import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jog")
export default class JogController {
  @operation({
    summary: "Get Jog",
  })
  @get()
  static getJog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jog",
  })
  @post("{id}")
  static createJog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
