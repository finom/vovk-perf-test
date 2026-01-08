import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdt")
export default class JdtController {
  @operation({
    summary: "Get Jdt",
  })
  @get()
  static getJdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdt",
  })
  @post("{id}")
  static createJdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
