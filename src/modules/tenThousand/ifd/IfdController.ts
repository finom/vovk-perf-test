import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifd")
export default class IfdController {
  @operation({
    summary: "Get Ifd",
  })
  @get()
  static getIfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifd",
  })
  @post("{id}")
  static createIfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
