import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkn")
export default class FknController {
  @operation({
    summary: "Get Fkn",
  })
  @get()
  static getFkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkn",
  })
  @post("{id}")
  static createFkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
