import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igm")
export default class IgmController {
  @operation({
    summary: "Get Igm",
  })
  @get()
  static getIgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igm",
  })
  @post("{id}")
  static createIgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
