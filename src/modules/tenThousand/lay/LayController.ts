import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lay")
export default class LayController {
  @operation({
    summary: "Get Lay",
  })
  @get()
  static getLay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lay",
  })
  @post("{id}")
  static createLay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
