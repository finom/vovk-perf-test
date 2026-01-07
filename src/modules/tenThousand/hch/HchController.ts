import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hch")
export default class HchController {
  @operation({
    summary: "Get Hch",
  })
  @get()
  static getHch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hch",
  })
  @post("{id}")
  static createHch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
