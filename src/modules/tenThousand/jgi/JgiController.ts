import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgi")
export default class JgiController {
  @operation({
    summary: "Get Jgi",
  })
  @get()
  static getJgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgi",
  })
  @post("{id}")
  static createJgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
