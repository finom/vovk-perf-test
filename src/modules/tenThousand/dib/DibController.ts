import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dib")
export default class DibController {
  @operation({
    summary: "Get Dib",
  })
  @get()
  static getDib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dib",
  })
  @post("{id}")
  static createDib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
