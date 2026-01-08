import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aki")
export default class AkiController {
  @operation({
    summary: "Get Aki",
  })
  @get()
  static getAki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aki",
  })
  @post("{id}")
  static createAki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
