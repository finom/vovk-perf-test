import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epv")
export default class EpvController {
  @operation({
    summary: "Get Epv",
  })
  @get()
  static getEpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epv",
  })
  @post("{id}")
  static createEpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
