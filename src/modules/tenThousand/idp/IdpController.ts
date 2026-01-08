import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idp")
export default class IdpController {
  @operation({
    summary: "Get Idp",
  })
  @get()
  static getIdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idp",
  })
  @post("{id}")
  static createIdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
