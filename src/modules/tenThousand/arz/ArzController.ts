import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arz")
export default class ArzController {
  @operation({
    summary: "Get Arz",
  })
  @get()
  static getArz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arz",
  })
  @post("{id}")
  static createArz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
