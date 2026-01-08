import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aog")
export default class AogController {
  @operation({
    summary: "Get Aog",
  })
  @get()
  static getAog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aog",
  })
  @post("{id}")
  static createAog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
