import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jad")
export default class JadController {
  @operation({
    summary: "Get Jad",
  })
  @get()
  static getJad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jad",
  })
  @post("{id}")
  static createJad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
