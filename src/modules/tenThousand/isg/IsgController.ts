import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isg")
export default class IsgController {
  @operation({
    summary: "Get Isg",
  })
  @get()
  static getIsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isg",
  })
  @post("{id}")
  static createIsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
