import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jle")
export default class JleController {
  @operation({
    summary: "Get Jle",
  })
  @get()
  static getJle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jle",
  })
  @post("{id}")
  static createJle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
