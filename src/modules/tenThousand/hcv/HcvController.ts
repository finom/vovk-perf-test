import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcv")
export default class HcvController {
  @operation({
    summary: "Get Hcv",
  })
  @get()
  static getHcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcv",
  })
  @post("{id}")
  static createHcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
