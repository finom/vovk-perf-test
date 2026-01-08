import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkz")
export default class FkzController {
  @operation({
    summary: "Get Fkz",
  })
  @get()
  static getFkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkz",
  })
  @post("{id}")
  static createFkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
