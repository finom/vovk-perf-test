import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpx")
export default class FpxController {
  @operation({
    summary: "Get Fpx",
  })
  @get()
  static getFpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpx",
  })
  @post("{id}")
  static createFpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
