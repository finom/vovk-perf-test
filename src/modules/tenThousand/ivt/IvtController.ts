import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivt")
export default class IvtController {
  @operation({
    summary: "Get Ivt",
  })
  @get()
  static getIvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivt",
  })
  @post("{id}")
  static createIvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
