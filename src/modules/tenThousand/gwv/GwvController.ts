import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwv")
export default class GwvController {
  @operation({
    summary: "Get Gwv",
  })
  @get()
  static getGwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwv",
  })
  @post("{id}")
  static createGwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
