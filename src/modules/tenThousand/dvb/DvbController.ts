import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvb")
export default class DvbController {
  @operation({
    summary: "Get Dvb",
  })
  @get()
  static getDvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvb",
  })
  @post("{id}")
  static createDvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
