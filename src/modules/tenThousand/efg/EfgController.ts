import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efg")
export default class EfgController {
  @operation({
    summary: "Get Efg",
  })
  @get()
  static getEfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efg",
  })
  @post("{id}")
  static createEfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
