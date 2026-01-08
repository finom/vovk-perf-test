import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csi")
export default class CsiController {
  @operation({
    summary: "Get Csi",
  })
  @get()
  static getCsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csi",
  })
  @post("{id}")
  static createCsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
