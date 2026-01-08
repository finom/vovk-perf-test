import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhs")
export default class FhsController {
  @operation({
    summary: "Get Fhs",
  })
  @get()
  static getFhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhs",
  })
  @post("{id}")
  static createFhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
