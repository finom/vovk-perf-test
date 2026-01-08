import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnr")
export default class GnrController {
  @operation({
    summary: "Get Gnr",
  })
  @get()
  static getGnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnr",
  })
  @post("{id}")
  static createGnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
