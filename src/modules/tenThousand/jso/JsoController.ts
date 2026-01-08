import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jso")
export default class JsoController {
  @operation({
    summary: "Get Jso",
  })
  @get()
  static getJso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jso",
  })
  @post("{id}")
  static createJso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
