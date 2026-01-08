import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnq")
export default class GnqController {
  @operation({
    summary: "Get Gnq",
  })
  @get()
  static getGnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnq",
  })
  @post("{id}")
  static createGnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
