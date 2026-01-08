import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kao")
export default class KaoController {
  @operation({
    summary: "Get Kao",
  })
  @get()
  static getKao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kao",
  })
  @post("{id}")
  static createKao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
