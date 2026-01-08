import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqb")
export default class GqbController {
  @operation({
    summary: "Get Gqb",
  })
  @get()
  static getGqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqb",
  })
  @post("{id}")
  static createGqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
