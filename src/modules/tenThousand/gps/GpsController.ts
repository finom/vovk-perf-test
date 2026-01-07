import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gps")
export default class GpsController {
  @operation({
    summary: "Get Gps",
  })
  @get()
  static getGps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gps",
  })
  @post("{id}")
  static createGps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
