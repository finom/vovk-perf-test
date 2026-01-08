import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czh")
export default class CzhController {
  @operation({
    summary: "Get Czh",
  })
  @get()
  static getCzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czh",
  })
  @post("{id}")
  static createCzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
