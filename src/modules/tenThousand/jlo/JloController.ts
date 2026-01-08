import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlo")
export default class JloController {
  @operation({
    summary: "Get Jlo",
  })
  @get()
  static getJlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlo",
  })
  @post("{id}")
  static createJlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
