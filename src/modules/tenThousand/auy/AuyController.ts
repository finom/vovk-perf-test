import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auy")
export default class AuyController {
  @operation({
    summary: "Get Auy",
  })
  @get()
  static getAuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auy",
  })
  @post("{id}")
  static createAuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
