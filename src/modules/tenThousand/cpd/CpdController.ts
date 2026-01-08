import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpd")
export default class CpdController {
  @operation({
    summary: "Get Cpd",
  })
  @get()
  static getCpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpd",
  })
  @post("{id}")
  static createCpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
