import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abv")
export default class AbvController {
  @operation({
    summary: "Get Abv",
  })
  @get()
  static getAbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abv",
  })
  @post("{id}")
  static createAbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
