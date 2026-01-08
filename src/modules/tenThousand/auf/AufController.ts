import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auf")
export default class AufController {
  @operation({
    summary: "Get Auf",
  })
  @get()
  static getAuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auf",
  })
  @post("{id}")
  static createAuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
