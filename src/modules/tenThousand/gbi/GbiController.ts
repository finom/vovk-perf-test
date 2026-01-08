import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbi")
export default class GbiController {
  @operation({
    summary: "Get Gbi",
  })
  @get()
  static getGbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbi",
  })
  @post("{id}")
  static createGbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
