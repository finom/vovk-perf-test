import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gue")
export default class GueController {
  @operation({
    summary: "Get Gue",
  })
  @get()
  static getGue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gue",
  })
  @post("{id}")
  static createGue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
