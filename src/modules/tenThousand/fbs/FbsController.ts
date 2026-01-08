import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbs")
export default class FbsController {
  @operation({
    summary: "Get Fbs",
  })
  @get()
  static getFbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbs",
  })
  @post("{id}")
  static createFbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
