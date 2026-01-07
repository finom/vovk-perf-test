import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hok")
export default class HokController {
  @operation({
    summary: "Get Hok",
  })
  @get()
  static getHok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hok",
  })
  @post("{id}")
  static createHok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
