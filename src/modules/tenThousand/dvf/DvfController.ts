import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvf")
export default class DvfController {
  @operation({
    summary: "Get Dvf",
  })
  @get()
  static getDvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvf",
  })
  @post("{id}")
  static createDvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
