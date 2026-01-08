import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fty")
export default class FtyController {
  @operation({
    summary: "Get Fty",
  })
  @get()
  static getFty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fty",
  })
  @post("{id}")
  static createFty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
