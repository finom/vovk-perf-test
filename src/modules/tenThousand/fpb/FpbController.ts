import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpb")
export default class FpbController {
  @operation({
    summary: "Get Fpb",
  })
  @get()
  static getFpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpb",
  })
  @post("{id}")
  static createFpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
