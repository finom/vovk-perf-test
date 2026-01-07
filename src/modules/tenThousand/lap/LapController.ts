import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lap")
export default class LapController {
  @operation({
    summary: "Get Lap",
  })
  @get()
  static getLap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lap",
  })
  @post("{id}")
  static createLap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
