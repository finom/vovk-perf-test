import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hys")
export default class HysController {
  @operation({
    summary: "Get Hys",
  })
  @get()
  static getHys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hys",
  })
  @post("{id}")
  static createHys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
