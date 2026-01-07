import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdc")
export default class HdcController {
  @operation({
    summary: "Get Hdc",
  })
  @get()
  static getHdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdc",
  })
  @post("{id}")
  static createHdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
