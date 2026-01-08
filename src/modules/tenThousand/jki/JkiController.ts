import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jki")
export default class JkiController {
  @operation({
    summary: "Get Jki",
  })
  @get()
  static getJki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jki",
  })
  @post("{id}")
  static createJki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
