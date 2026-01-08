import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lok")
export default class LokController {
  @operation({
    summary: "Get Lok",
  })
  @get()
  static getLok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lok",
  })
  @post("{id}")
  static createLok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
