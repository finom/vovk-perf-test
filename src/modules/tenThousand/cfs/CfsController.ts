import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfs")
export default class CfsController {
  @operation({
    summary: "Get Cfs",
  })
  @get()
  static getCfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfs",
  })
  @post("{id}")
  static createCfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
