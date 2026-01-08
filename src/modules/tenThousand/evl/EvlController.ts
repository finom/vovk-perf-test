import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evl")
export default class EvlController {
  @operation({
    summary: "Get Evl",
  })
  @get()
  static getEvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evl",
  })
  @post("{id}")
  static createEvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
