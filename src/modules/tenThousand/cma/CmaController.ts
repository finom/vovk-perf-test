import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cma")
export default class CmaController {
  @operation({
    summary: "Get Cma",
  })
  @get()
  static getCma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cma",
  })
  @post("{id}")
  static createCma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
