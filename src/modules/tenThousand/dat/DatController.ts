import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dat")
export default class DatController {
  @operation({
    summary: "Get Dat",
  })
  @get()
  static getDat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dat",
  })
  @post("{id}")
  static createDat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
