import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asy")
export default class AsyController {
  @operation({
    summary: "Get Asy",
  })
  @get()
  static getAsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asy",
  })
  @post("{id}")
  static createAsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
