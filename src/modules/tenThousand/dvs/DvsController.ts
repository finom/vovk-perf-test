import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvs")
export default class DvsController {
  @operation({
    summary: "Get Dvs",
  })
  @get()
  static getDvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvs",
  })
  @post("{id}")
  static createDvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
