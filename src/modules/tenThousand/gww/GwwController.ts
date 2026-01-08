import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gww")
export default class GwwController {
  @operation({
    summary: "Get Gww",
  })
  @get()
  static getGww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gww",
  })
  @post("{id}")
  static createGww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
