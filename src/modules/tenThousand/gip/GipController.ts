import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gip")
export default class GipController {
  @operation({
    summary: "Get Gip",
  })
  @get()
  static getGip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gip",
  })
  @post("{id}")
  static createGip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
