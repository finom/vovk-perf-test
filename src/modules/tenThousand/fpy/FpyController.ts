import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpy")
export default class FpyController {
  @operation({
    summary: "Get Fpy",
  })
  @get()
  static getFpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpy",
  })
  @post("{id}")
  static createFpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
