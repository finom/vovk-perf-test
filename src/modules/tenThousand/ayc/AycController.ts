import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayc")
export default class AycController {
  @operation({
    summary: "Get Ayc",
  })
  @get()
  static getAyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayc",
  })
  @post("{id}")
  static createAyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
