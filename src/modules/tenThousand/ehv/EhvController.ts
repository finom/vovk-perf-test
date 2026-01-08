import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehv")
export default class EhvController {
  @operation({
    summary: "Get Ehv",
  })
  @get()
  static getEhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehv",
  })
  @post("{id}")
  static createEhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
