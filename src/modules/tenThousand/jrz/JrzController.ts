import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrz")
export default class JrzController {
  @operation({
    summary: "Get Jrz",
  })
  @get()
  static getJrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrz",
  })
  @post("{id}")
  static createJrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
