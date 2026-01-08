import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jo")
export default class JoController {
  @operation({
    summary: "Get Jo",
  })
  @get()
  static getJo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jo",
  })
  @post("{id}")
  static createJo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
