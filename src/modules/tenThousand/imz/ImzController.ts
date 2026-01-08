import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imz")
export default class ImzController {
  @operation({
    summary: "Get Imz",
  })
  @get()
  static getImz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imz",
  })
  @post("{id}")
  static createImz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
