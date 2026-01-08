import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byo")
export default class ByoController {
  @operation({
    summary: "Get Byo",
  })
  @get()
  static getByo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byo",
  })
  @post("{id}")
  static createByo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
