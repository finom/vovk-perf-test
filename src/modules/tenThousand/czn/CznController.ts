import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czn")
export default class CznController {
  @operation({
    summary: "Get Czn",
  })
  @get()
  static getCzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czn",
  })
  @post("{id}")
  static createCzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
