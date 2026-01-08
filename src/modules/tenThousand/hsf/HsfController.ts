import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsf")
export default class HsfController {
  @operation({
    summary: "Get Hsf",
  })
  @get()
  static getHsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsf",
  })
  @post("{id}")
  static createHsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
