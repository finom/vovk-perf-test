import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkr")
export default class FkrController {
  @operation({
    summary: "Get Fkr",
  })
  @get()
  static getFkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkr",
  })
  @post("{id}")
  static createFkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
