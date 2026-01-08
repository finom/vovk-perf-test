import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gen")
export default class GenController {
  @operation({
    summary: "Get Gen",
  })
  @get()
  static getGen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gen",
  })
  @post("{id}")
  static createGen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
