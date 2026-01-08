import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("biw")
export default class BiwController {
  @operation({
    summary: "Get Biw",
  })
  @get()
  static getBiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biw",
  })
  @post("{id}")
  static createBiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
