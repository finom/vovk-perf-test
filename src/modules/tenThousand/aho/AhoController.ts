import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aho")
export default class AhoController {
  @operation({
    summary: "Get Aho",
  })
  @get()
  static getAho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aho",
  })
  @post("{id}")
  static createAho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
