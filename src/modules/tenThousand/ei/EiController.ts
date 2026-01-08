import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ei")
export default class EiController {
  @operation({
    summary: "Get Ei",
  })
  @get()
  static getEi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ei",
  })
  @post("{id}")
  static createEi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
