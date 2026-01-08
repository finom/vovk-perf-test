import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwa")
export default class JwaController {
  @operation({
    summary: "Get Jwa",
  })
  @get()
  static getJwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwa",
  })
  @post("{id}")
  static createJwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
