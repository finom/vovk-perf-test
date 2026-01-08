import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cti")
export default class CtiController {
  @operation({
    summary: "Get Cti",
  })
  @get()
  static getCti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cti",
  })
  @post("{id}")
  static createCti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
