import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zo")
export default class ZoController {
  @operation({
    summary: "Get Zo",
  })
  @get()
  static getZo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zo",
  })
  @post("{id}")
  static createZo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
