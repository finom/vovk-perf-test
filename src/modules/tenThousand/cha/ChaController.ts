import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cha")
export default class ChaController {
  @operation({
    summary: "Get Cha",
  })
  @get()
  static getCha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cha",
  })
  @post("{id}")
  static createCha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
