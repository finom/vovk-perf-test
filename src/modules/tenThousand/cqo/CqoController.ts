import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqo")
export default class CqoController {
  @operation({
    summary: "Get Cqo",
  })
  @get()
  static getCqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqo",
  })
  @post("{id}")
  static createCqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
