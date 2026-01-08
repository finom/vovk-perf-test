import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncy")
export default class NcyController {
  @operation({
    summary: "Get Ncy",
  })
  @get()
  static getNcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncy",
  })
  @post("{id}")
  static createNcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
