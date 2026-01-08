import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpk")
export default class CpkController {
  @operation({
    summary: "Get Cpk",
  })
  @get()
  static getCpk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpk",
  })
  @post("{id}")
  static createCpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
