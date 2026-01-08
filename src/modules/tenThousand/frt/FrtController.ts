import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frt")
export default class FrtController {
  @operation({
    summary: "Get Frt",
  })
  @get()
  static getFrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frt",
  })
  @post("{id}")
  static createFrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
