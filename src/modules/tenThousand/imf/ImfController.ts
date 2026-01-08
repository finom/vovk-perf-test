import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imf")
export default class ImfController {
  @operation({
    summary: "Get Imf",
  })
  @get()
  static getImf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imf",
  })
  @post("{id}")
  static createImf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
