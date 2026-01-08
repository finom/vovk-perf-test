import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cr")
export default class CrController {
  @operation({
    summary: "Get Cr",
  })
  @get()
  static getCr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cr",
  })
  @post("{id}")
  static createCr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
