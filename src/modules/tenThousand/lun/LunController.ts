import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lun")
export default class LunController {
  @operation({
    summary: "Get Lun",
  })
  @get()
  static getLun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lun",
  })
  @post("{id}")
  static createLun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
