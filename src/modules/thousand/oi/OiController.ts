import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oi")
export default class OiController {
  @operation({
    summary: "Get Oi",
  })
  @get()
  static getOi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oi",
  })
  @post("{id}")
  static createOi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
