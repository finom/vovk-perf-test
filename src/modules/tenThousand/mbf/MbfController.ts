import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbf")
export default class MbfController {
  @operation({
    summary: "Get Mbf",
  })
  @get()
  static getMbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbf",
  })
  @post("{id}")
  static createMbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
