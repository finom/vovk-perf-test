import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fla")
export default class FlaController {
  @operation({
    summary: "Get Fla",
  })
  @get()
  static getFla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fla",
  })
  @post("{id}")
  static createFla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
