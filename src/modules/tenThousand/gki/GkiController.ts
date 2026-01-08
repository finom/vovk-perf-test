import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gki")
export default class GkiController {
  @operation({
    summary: "Get Gki",
  })
  @get()
  static getGki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gki",
  })
  @post("{id}")
  static createGki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
