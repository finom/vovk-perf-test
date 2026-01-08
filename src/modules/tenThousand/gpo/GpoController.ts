import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpo")
export default class GpoController {
  @operation({
    summary: "Get Gpo",
  })
  @get()
  static getGpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpo",
  })
  @post("{id}")
  static createGpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
