import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpa")
export default class KpaController {
  @operation({
    summary: "Get Kpa",
  })
  @get()
  static getKpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpa",
  })
  @post("{id}")
  static createKpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
