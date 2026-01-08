import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjt")
export default class JjtController {
  @operation({
    summary: "Get Jjt",
  })
  @get()
  static getJjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjt",
  })
  @post("{id}")
  static createJjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
