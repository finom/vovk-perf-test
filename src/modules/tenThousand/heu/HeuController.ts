import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("heu")
export default class HeuController {
  @operation({
    summary: "Get Heu",
  })
  @get()
  static getHeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heu",
  })
  @post("{id}")
  static createHeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
