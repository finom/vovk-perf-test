import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrs")
export default class NrsController {
  @operation({
    summary: "Get Nrs",
  })
  @get()
  static getNrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nrs",
  })
  @post("{id}")
  static createNrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
