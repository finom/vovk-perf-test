import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsw")
export default class GswController {
  @operation({
    summary: "Get Gsw",
  })
  @get()
  static getGsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsw",
  })
  @post("{id}")
  static createGsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
