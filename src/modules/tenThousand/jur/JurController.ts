import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jur")
export default class JurController {
  @operation({
    summary: "Get Jur",
  })
  @get()
  static getJur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jur",
  })
  @post("{id}")
  static createJur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
