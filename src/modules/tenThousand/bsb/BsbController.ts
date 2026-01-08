import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsb")
export default class BsbController {
  @operation({
    summary: "Get Bsb",
  })
  @get()
  static getBsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsb",
  })
  @post("{id}")
  static createBsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
