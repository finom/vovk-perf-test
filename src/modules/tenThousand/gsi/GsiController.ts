import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsi")
export default class GsiController {
  @operation({
    summary: "Get Gsi",
  })
  @get()
  static getGsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsi",
  })
  @post("{id}")
  static createGsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
