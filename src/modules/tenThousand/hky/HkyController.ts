import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hky")
export default class HkyController {
  @operation({
    summary: "Get Hky",
  })
  @get()
  static getHky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hky",
  })
  @post("{id}")
  static createHky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
