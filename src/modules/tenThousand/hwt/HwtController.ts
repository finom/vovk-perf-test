import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwt")
export default class HwtController {
  @operation({
    summary: "Get Hwt",
  })
  @get()
  static getHwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwt",
  })
  @post("{id}")
  static createHwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
