import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jty")
export default class JtyController {
  @operation({
    summary: "Get Jty",
  })
  @get()
  static getJty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jty",
  })
  @post("{id}")
  static createJty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
