import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqh")
export default class AqhController {
  @operation({
    summary: "Get Aqh",
  })
  @get()
  static getAqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqh",
  })
  @post("{id}")
  static createAqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
