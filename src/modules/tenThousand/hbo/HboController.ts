import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbo")
export default class HboController {
  @operation({
    summary: "Get Hbo",
  })
  @get()
  static getHbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbo",
  })
  @post("{id}")
  static createHbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
