import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("feo")
export default class FeoController {
  @operation({
    summary: "Get Feo",
  })
  @get()
  static getFeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feo",
  })
  @post("{id}")
  static createFeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
