import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqo")
export default class HqoController {
  @operation({
    summary: "Get Hqo",
  })
  @get()
  static getHqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqo",
  })
  @post("{id}")
  static createHqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
