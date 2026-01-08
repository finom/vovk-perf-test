import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awy")
export default class AwyController {
  @operation({
    summary: "Get Awy",
  })
  @get()
  static getAwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awy",
  })
  @post("{id}")
  static createAwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
