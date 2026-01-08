import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqb")
export default class KqbController {
  @operation({
    summary: "Get Kqb",
  })
  @get()
  static getKqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqb",
  })
  @post("{id}")
  static createKqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
