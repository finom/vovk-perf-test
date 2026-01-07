import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kml")
export default class KmlController {
  @operation({
    summary: "Get Kml",
  })
  @get()
  static getKml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kml",
  })
  @post("{id}")
  static createKml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
