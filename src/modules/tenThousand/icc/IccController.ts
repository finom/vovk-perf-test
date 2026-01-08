import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icc")
export default class IccController {
  @operation({
    summary: "Get Icc",
  })
  @get()
  static getIcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icc",
  })
  @post("{id}")
  static createIcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
