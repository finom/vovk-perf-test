import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvn")
export default class DvnController {
  @operation({
    summary: "Get Dvn",
  })
  @get()
  static getDvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvn",
  })
  @post("{id}")
  static createDvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
