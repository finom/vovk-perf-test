import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwg")
export default class GwgController {
  @operation({
    summary: "Get Gwg",
  })
  @get()
  static getGwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwg",
  })
  @post("{id}")
  static createGwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
