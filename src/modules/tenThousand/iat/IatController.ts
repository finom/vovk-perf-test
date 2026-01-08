import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iat")
export default class IatController {
  @operation({
    summary: "Get Iat",
  })
  @get()
  static getIat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iat",
  })
  @post("{id}")
  static createIat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
