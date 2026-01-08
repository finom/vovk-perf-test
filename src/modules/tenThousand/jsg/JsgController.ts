import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsg")
export default class JsgController {
  @operation({
    summary: "Get Jsg",
  })
  @get()
  static getJsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsg",
  })
  @post("{id}")
  static createJsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
