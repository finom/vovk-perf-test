import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ite")
export default class IteController {
  @operation({
    summary: "Get Ite",
  })
  @get()
  static getIte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ite",
  })
  @post("{id}")
  static createIte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
