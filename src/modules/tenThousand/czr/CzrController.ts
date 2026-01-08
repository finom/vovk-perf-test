import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czr")
export default class CzrController {
  @operation({
    summary: "Get Czr",
  })
  @get()
  static getCzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czr",
  })
  @post("{id}")
  static createCzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
