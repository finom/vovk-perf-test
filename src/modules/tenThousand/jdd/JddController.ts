import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdd")
export default class JddController {
  @operation({
    summary: "Get Jdd",
  })
  @get()
  static getJdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdd",
  })
  @post("{id}")
  static createJdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
