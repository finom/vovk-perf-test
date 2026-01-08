import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffw")
export default class FfwController {
  @operation({
    summary: "Get Ffw",
  })
  @get()
  static getFfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffw",
  })
  @post("{id}")
  static createFfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
