import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epg")
export default class EpgController {
  @operation({
    summary: "Get Epg",
  })
  @get()
  static getEpg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epg",
  })
  @post("{id}")
  static createEpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
