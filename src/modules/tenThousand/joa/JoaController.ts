import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joa")
export default class JoaController {
  @operation({
    summary: "Get Joa",
  })
  @get()
  static getJoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joa",
  })
  @post("{id}")
  static createJoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
