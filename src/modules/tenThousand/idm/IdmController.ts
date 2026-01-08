import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idm")
export default class IdmController {
  @operation({
    summary: "Get Idm",
  })
  @get()
  static getIdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idm",
  })
  @post("{id}")
  static createIdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
