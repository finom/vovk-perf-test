import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msi")
export default class MsiController {
  @operation({
    summary: "Get Msi",
  })
  @get()
  static getMsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msi",
  })
  @post("{id}")
  static createMsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
