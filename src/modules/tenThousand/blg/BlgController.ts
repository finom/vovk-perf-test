import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blg")
export default class BlgController {
  @operation({
    summary: "Get Blg",
  })
  @get()
  static getBlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blg",
  })
  @post("{id}")
  static createBlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
