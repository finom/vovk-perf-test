import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwr")
export default class CwrController {
  @operation({
    summary: "Get Cwr",
  })
  @get()
  static getCwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwr",
  })
  @post("{id}")
  static createCwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
