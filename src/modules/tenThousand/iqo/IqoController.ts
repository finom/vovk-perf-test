import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqo")
export default class IqoController {
  @operation({
    summary: "Get Iqo",
  })
  @get()
  static getIqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqo",
  })
  @post("{id}")
  static createIqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
