import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bga")
export default class BgaController {
  @operation({
    summary: "Get Bga",
  })
  @get()
  static getBga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bga",
  })
  @post("{id}")
  static createBga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
