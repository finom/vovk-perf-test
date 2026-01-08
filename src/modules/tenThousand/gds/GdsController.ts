import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gds")
export default class GdsController {
  @operation({
    summary: "Get Gds",
  })
  @get()
  static getGds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gds",
  })
  @post("{id}")
  static createGds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
