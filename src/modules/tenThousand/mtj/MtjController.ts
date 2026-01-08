import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtj")
export default class MtjController {
  @operation({
    summary: "Get Mtj",
  })
  @get()
  static getMtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtj",
  })
  @post("{id}")
  static createMtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
