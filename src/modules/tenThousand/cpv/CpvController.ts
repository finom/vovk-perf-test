import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpv")
export default class CpvController {
  @operation({
    summary: "Get Cpv",
  })
  @get()
  static getCpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpv",
  })
  @post("{id}")
  static createCpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
