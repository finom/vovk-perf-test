import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eif")
export default class EifController {
  @operation({
    summary: "Get Eif",
  })
  @get()
  static getEif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eif",
  })
  @post("{id}")
  static createEif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
