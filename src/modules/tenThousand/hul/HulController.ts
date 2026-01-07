import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hul")
export default class HulController {
  @operation({
    summary: "Get Hul",
  })
  @get()
  static getHul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hul",
  })
  @post("{id}")
  static createHul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
