import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsi")
export default class BsiController {
  @operation({
    summary: "Get Bsi",
  })
  @get()
  static getBsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsi",
  })
  @post("{id}")
  static createBsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
