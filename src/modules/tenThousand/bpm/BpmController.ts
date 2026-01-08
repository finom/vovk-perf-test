import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpm")
export default class BpmController {
  @operation({
    summary: "Get Bpm",
  })
  @get()
  static getBpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpm",
  })
  @post("{id}")
  static createBpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
