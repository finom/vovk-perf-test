import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffs")
export default class FfsController {
  @operation({
    summary: "Get Ffs",
  })
  @get()
  static getFfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffs",
  })
  @post("{id}")
  static createFfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
