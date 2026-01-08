import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsb")
export default class HsbController {
  @operation({
    summary: "Get Hsb",
  })
  @get()
  static getHsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsb",
  })
  @post("{id}")
  static createHsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
