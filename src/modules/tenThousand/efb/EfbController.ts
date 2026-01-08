import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efb")
export default class EfbController {
  @operation({
    summary: "Get Efb",
  })
  @get()
  static getEfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efb",
  })
  @post("{id}")
  static createEfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
