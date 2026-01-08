import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkw")
export default class FkwController {
  @operation({
    summary: "Get Fkw",
  })
  @get()
  static getFkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkw",
  })
  @post("{id}")
  static createFkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
