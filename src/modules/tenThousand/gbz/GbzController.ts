import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbz")
export default class GbzController {
  @operation({
    summary: "Get Gbz",
  })
  @get()
  static getGbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbz",
  })
  @post("{id}")
  static createGbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
