import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlc")
export default class MlcController {
  @operation({
    summary: "Get Mlc",
  })
  @get()
  static getMlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlc",
  })
  @post("{id}")
  static createMlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
