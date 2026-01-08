import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjb")
export default class JjbController {
  @operation({
    summary: "Get Jjb",
  })
  @get()
  static getJjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjb",
  })
  @post("{id}")
  static createJjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
