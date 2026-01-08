import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkm")
export default class FkmController {
  @operation({
    summary: "Get Fkm",
  })
  @get()
  static getFkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkm",
  })
  @post("{id}")
  static createFkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
