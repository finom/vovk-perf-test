import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aul")
export default class AulController {
  @operation({
    summary: "Get Aul",
  })
  @get()
  static getAul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aul",
  })
  @post("{id}")
  static createAul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
