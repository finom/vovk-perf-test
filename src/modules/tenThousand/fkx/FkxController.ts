import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkx")
export default class FkxController {
  @operation({
    summary: "Get Fkx",
  })
  @get()
  static getFkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkx",
  })
  @post("{id}")
  static createFkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
