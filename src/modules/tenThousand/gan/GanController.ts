import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gan")
export default class GanController {
  @operation({
    summary: "Get Gan",
  })
  @get()
  static getGan = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gan",
  })
  @post("{id}")
  static createGan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
