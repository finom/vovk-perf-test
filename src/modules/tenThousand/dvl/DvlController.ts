import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvl")
export default class DvlController {
  @operation({
    summary: "Get Dvl",
  })
  @get()
  static getDvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvl",
  })
  @post("{id}")
  static createDvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
