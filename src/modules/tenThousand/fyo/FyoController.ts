import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyo")
export default class FyoController {
  @operation({
    summary: "Get Fyo",
  })
  @get()
  static getFyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyo",
  })
  @post("{id}")
  static createFyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
