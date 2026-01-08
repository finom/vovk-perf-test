import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cga")
export default class CgaController {
  @operation({
    summary: "Get Cga",
  })
  @get()
  static getCga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cga",
  })
  @post("{id}")
  static createCga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
