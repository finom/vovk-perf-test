import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jix")
export default class JixController {
  @operation({
    summary: "Get Jix",
  })
  @get()
  static getJix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jix",
  })
  @post("{id}")
  static createJix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
