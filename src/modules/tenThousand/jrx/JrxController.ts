import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrx")
export default class JrxController {
  @operation({
    summary: "Get Jrx",
  })
  @get()
  static getJrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrx",
  })
  @post("{id}")
  static createJrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
