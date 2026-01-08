import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lng")
export default class LngController {
  @operation({
    summary: "Get Lng",
  })
  @get()
  static getLng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lng",
  })
  @post("{id}")
  static createLng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
