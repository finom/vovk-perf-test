import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxd")
export default class GxdController {
  @operation({
    summary: "Get Gxd",
  })
  @get()
  static getGxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxd",
  })
  @post("{id}")
  static createGxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
