import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgg")
export default class LggController {
  @operation({
    summary: "Get Lgg",
  })
  @get()
  static getLgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgg",
  })
  @post("{id}")
  static createLgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
