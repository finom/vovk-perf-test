import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcu")
export default class JcuController {
  @operation({
    summary: "Get Jcu",
  })
  @get()
  static getJcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcu",
  })
  @post("{id}")
  static createJcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
