import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czq")
export default class CzqController {
  @operation({
    summary: "Get Czq",
  })
  @get()
  static getCzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czq",
  })
  @post("{id}")
  static createCzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
