import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lat")
export default class LatController {
  @operation({
    summary: "Get Lat",
  })
  @get()
  static getLat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lat",
  })
  @post("{id}")
  static createLat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
