import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgc")
export default class KgcController {
  @operation({
    summary: "Get Kgc",
  })
  @get()
  static getKgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgc",
  })
  @post("{id}")
  static createKgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
