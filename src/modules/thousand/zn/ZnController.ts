import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zn")
export default class ZnController {
  @operation({
    summary: "Get Zn",
  })
  @get()
  static getZn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zn",
  })
  @post("{id}")
  static createZn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
