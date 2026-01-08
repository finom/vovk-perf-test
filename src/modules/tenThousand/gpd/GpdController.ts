import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpd")
export default class GpdController {
  @operation({
    summary: "Get Gpd",
  })
  @get()
  static getGpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpd",
  })
  @post("{id}")
  static createGpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
