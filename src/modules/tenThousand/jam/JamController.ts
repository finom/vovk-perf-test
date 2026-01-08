import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jam")
export default class JamController {
  @operation({
    summary: "Get Jam",
  })
  @get()
  static getJam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jam",
  })
  @post("{id}")
  static createJam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
