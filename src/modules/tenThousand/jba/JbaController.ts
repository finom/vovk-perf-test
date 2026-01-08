import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jba")
export default class JbaController {
  @operation({
    summary: "Get Jba",
  })
  @get()
  static getJba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jba",
  })
  @post("{id}")
  static createJba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
