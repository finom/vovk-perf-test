import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jeb")
export default class JebController {
  @operation({
    summary: "Get Jeb",
  })
  @get()
  static getJeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeb",
  })
  @post("{id}")
  static createJeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
