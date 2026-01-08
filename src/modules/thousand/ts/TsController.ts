import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ts")
export default class TsController {
  @operation({
    summary: "Get Ts",
  })
  @get()
  static getTs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ts",
  })
  @post("{id}")
  static createTs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
