import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixl")
export default class IxlController {
  @operation({
    summary: "Get Ixl",
  })
  @get()
  static getIxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixl",
  })
  @post("{id}")
  static createIxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
