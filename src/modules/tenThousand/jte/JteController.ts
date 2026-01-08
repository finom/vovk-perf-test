import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jte")
export default class JteController {
  @operation({
    summary: "Get Jte",
  })
  @get()
  static getJte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jte",
  })
  @post("{id}")
  static createJte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
