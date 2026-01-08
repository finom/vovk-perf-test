import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqv")
export default class GqvController {
  @operation({
    summary: "Get Gqv",
  })
  @get()
  static getGqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqv",
  })
  @post("{id}")
  static createGqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
