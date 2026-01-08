import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsf")
export default class GsfController {
  @operation({
    summary: "Get Gsf",
  })
  @get()
  static getGsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsf",
  })
  @post("{id}")
  static createGsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
