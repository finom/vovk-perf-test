import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffz")
export default class FfzController {
  @operation({
    summary: "Get Ffz",
  })
  @get()
  static getFfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffz",
  })
  @post("{id}")
  static createFfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
