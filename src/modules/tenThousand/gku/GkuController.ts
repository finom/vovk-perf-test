import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gku")
export default class GkuController {
  @operation({
    summary: "Get Gku",
  })
  @get()
  static getGku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gku",
  })
  @post("{id}")
  static createGku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
