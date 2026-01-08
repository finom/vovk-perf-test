import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrv")
export default class JrvController {
  @operation({
    summary: "Get Jrv",
  })
  @get()
  static getJrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrv",
  })
  @post("{id}")
  static createJrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
