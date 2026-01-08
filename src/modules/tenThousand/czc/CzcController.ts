import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czc")
export default class CzcController {
  @operation({
    summary: "Get Czc",
  })
  @get()
  static getCzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czc",
  })
  @post("{id}")
  static createCzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
