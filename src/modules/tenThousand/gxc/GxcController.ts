import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxc")
export default class GxcController {
  @operation({
    summary: "Get Gxc",
  })
  @get()
  static getGxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxc",
  })
  @post("{id}")
  static createGxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
