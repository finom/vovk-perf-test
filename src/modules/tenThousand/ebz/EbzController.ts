import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebz")
export default class EbzController {
  @operation({
    summary: "Get Ebz",
  })
  @get()
  static getEbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebz",
  })
  @post("{id}")
  static createEbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
