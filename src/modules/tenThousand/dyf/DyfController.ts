import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyf")
export default class DyfController {
  @operation({
    summary: "Get Dyf",
  })
  @get()
  static getDyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyf",
  })
  @post("{id}")
  static createDyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
