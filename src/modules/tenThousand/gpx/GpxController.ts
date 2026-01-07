import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpx")
export default class GpxController {
  @operation({
    summary: "Get Gpx",
  })
  @get()
  static getGpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpx",
  })
  @post("{id}")
  static createGpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
