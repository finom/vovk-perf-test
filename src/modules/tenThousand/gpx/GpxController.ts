import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpx")
export default class GpxController {
  @operation({
    summary: "Get Gpx",
  })
  @get()
  static getGpx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpx",
  })
  @post("{id}")
  static createGpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
