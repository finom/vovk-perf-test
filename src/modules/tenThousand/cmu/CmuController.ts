import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmu")
export default class CmuController {
  @operation({
    summary: "Get Cmu",
  })
  @get()
  static getCmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmu",
  })
  @post("{id}")
  static createCmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
