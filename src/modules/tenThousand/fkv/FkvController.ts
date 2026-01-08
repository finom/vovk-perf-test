import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkv")
export default class FkvController {
  @operation({
    summary: "Get Fkv",
  })
  @get()
  static getFkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkv",
  })
  @post("{id}")
  static createFkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
