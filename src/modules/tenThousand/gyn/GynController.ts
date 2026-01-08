import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyn")
export default class GynController {
  @operation({
    summary: "Get Gyn",
  })
  @get()
  static getGyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyn",
  })
  @post("{id}")
  static createGyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
