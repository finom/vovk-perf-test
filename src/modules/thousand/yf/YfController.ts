import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yf")
export default class YfController {
  @operation({
    summary: "Get Yf",
  })
  @get()
  static getYf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yf",
  })
  @post("{id}")
  static createYf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
