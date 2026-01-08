import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edd")
export default class EddController {
  @operation({
    summary: "Get Edd",
  })
  @get()
  static getEdd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edd",
  })
  @post("{id}")
  static createEdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
