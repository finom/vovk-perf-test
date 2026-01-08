import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpd")
export default class FpdController {
  @operation({
    summary: "Get Fpd",
  })
  @get()
  static getFpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpd",
  })
  @post("{id}")
  static createFpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
