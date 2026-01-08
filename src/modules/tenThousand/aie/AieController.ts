import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aie")
export default class AieController {
  @operation({
    summary: "Get Aie",
  })
  @get()
  static getAie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aie",
  })
  @post("{id}")
  static createAie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
