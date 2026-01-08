import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekg")
export default class EkgController {
  @operation({
    summary: "Get Ekg",
  })
  @get()
  static getEkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekg",
  })
  @post("{id}")
  static createEkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
