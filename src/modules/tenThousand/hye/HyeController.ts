import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hye")
export default class HyeController {
  @operation({
    summary: "Get Hye",
  })
  @get()
  static getHye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hye",
  })
  @post("{id}")
  static createHye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
