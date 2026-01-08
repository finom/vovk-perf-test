import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccd")
export default class CcdController {
  @operation({
    summary: "Get Ccd",
  })
  @get()
  static getCcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccd",
  })
  @post("{id}")
  static createCcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
