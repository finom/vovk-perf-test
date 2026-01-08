import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gkg")
export default class GkgController {
  @operation({
    summary: "Get Gkg",
  })
  @get()
  static getGkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkg",
  })
  @post("{id}")
  static createGkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
