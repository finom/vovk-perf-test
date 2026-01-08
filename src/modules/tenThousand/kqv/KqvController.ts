import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqv")
export default class KqvController {
  @operation({
    summary: "Get Kqv",
  })
  @get()
  static getKqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqv",
  })
  @post("{id}")
  static createKqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
