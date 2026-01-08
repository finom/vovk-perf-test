import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bms")
export default class BmsController {
  @operation({
    summary: "Get Bms",
  })
  @get()
  static getBms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bms",
  })
  @post("{id}")
  static createBms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
