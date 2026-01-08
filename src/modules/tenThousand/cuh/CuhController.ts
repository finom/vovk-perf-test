import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuh")
export default class CuhController {
  @operation({
    summary: "Get Cuh",
  })
  @get()
  static getCuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuh",
  })
  @post("{id}")
  static createCuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
