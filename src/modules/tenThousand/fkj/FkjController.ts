import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkj")
export default class FkjController {
  @operation({
    summary: "Get Fkj",
  })
  @get()
  static getFkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkj",
  })
  @post("{id}")
  static createFkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
