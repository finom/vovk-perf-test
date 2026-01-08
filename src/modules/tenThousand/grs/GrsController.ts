import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grs")
export default class GrsController {
  @operation({
    summary: "Get Grs",
  })
  @get()
  static getGrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grs",
  })
  @post("{id}")
  static createGrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
