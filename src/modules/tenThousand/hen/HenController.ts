import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hen")
export default class HenController {
  @operation({
    summary: "Get Hen",
  })
  @get()
  static getHen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hen",
  })
  @post("{id}")
  static createHen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
