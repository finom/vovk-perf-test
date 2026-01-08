import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoi")
export default class AoiController {
  @operation({
    summary: "Get Aoi",
  })
  @get()
  static getAoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoi",
  })
  @post("{id}")
  static createAoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
