import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edh")
export default class EdhController {
  @operation({
    summary: "Get Edh",
  })
  @get()
  static getEdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edh",
  })
  @post("{id}")
  static createEdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
