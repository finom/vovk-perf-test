import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfe")
export default class HfeController {
  @operation({
    summary: "Get Hfe",
  })
  @get()
  static getHfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfe",
  })
  @post("{id}")
  static createHfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
