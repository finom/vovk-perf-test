import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juu")
export default class JuuController {
  @operation({
    summary: "Get Juu",
  })
  @get()
  static getJuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juu",
  })
  @post("{id}")
  static createJuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
