import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erl")
export default class ErlController {
  @operation({
    summary: "Get Erl",
  })
  @get()
  static getErl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erl",
  })
  @post("{id}")
  static createErl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
