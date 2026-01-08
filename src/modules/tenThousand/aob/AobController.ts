import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aob")
export default class AobController {
  @operation({
    summary: "Get Aob",
  })
  @get()
  static getAob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aob",
  })
  @post("{id}")
  static createAob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
