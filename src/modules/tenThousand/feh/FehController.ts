import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("feh")
export default class FehController {
  @operation({
    summary: "Get Feh",
  })
  @get()
  static getFeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feh",
  })
  @post("{id}")
  static createFeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
