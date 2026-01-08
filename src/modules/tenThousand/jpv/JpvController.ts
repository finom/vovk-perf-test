import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpv")
export default class JpvController {
  @operation({
    summary: "Get Jpv",
  })
  @get()
  static getJpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpv",
  })
  @post("{id}")
  static createJpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
