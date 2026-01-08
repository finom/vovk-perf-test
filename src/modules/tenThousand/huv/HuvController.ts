import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huv")
export default class HuvController {
  @operation({
    summary: "Get Huv",
  })
  @get()
  static getHuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huv",
  })
  @post("{id}")
  static createHuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
