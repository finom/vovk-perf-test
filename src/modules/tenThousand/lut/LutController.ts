import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lut")
export default class LutController {
  @operation({
    summary: "Get Lut",
  })
  @get()
  static getLut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lut",
  })
  @post("{id}")
  static createLut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
