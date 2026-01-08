import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpw")
export default class FpwController {
  @operation({
    summary: "Get Fpw",
  })
  @get()
  static getFpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpw",
  })
  @post("{id}")
  static createFpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
