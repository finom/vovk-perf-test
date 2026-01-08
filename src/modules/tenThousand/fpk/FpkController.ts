import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpk")
export default class FpkController {
  @operation({
    summary: "Get Fpk",
  })
  @get()
  static getFpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpk",
  })
  @post("{id}")
  static createFpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
