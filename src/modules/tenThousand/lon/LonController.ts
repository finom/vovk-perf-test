import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lon")
export default class LonController {
  @operation({
    summary: "Get Lon",
  })
  @get()
  static getLon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lon",
  })
  @post("{id}")
  static createLon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
