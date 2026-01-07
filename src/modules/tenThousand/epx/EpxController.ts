import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epx")
export default class EpxController {
  @operation({
    summary: "Get Epx",
  })
  @get()
  static getEpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epx",
  })
  @post("{id}")
  static createEpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
