import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hms")
export default class HmsController {
  @operation({
    summary: "Get Hms",
  })
  @get()
  static getHms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hms",
  })
  @post("{id}")
  static createHms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
