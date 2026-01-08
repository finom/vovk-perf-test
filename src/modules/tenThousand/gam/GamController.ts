import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gam")
export default class GamController {
  @operation({
    summary: "Get Gam",
  })
  @get()
  static getGam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gam",
  })
  @post("{id}")
  static createGam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
