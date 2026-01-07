import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hve")
export default class HveController {
  @operation({
    summary: "Get Hve",
  })
  @get()
  static getHve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hve",
  })
  @post("{id}")
  static createHve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
