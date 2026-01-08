import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eur")
export default class EurController {
  @operation({
    summary: "Get Eur",
  })
  @get()
  static getEur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eur",
  })
  @post("{id}")
  static createEur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
