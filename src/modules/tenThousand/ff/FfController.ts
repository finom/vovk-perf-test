import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ff")
export default class FfController {
  @operation({
    summary: "Get Ff",
  })
  @get()
  static getFf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ff",
  })
  @post("{id}")
  static createFf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
