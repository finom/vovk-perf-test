import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpp")
export default class FppController {
  @operation({
    summary: "Get Fpp",
  })
  @get()
  static getFpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpp",
  })
  @post("{id}")
  static createFpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
