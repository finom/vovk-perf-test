import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jab")
export default class JabController {
  @operation({
    summary: "Get Jab",
  })
  @get()
  static getJab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jab",
  })
  @post("{id}")
  static createJab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
