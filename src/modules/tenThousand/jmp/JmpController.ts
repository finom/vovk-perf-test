import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmp")
export default class JmpController {
  @operation({
    summary: "Get Jmp",
  })
  @get()
  static getJmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmp",
  })
  @post("{id}")
  static createJmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
