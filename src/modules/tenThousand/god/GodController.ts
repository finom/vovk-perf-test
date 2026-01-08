import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("god")
export default class GodController {
  @operation({
    summary: "Get God",
  })
  @get()
  static getGod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create God",
  })
  @post("{id}")
  static createGod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
