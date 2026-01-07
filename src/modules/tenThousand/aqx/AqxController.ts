import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqx")
export default class AqxController {
  @operation({
    summary: "Get Aqx",
  })
  @get()
  static getAqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqx",
  })
  @post("{id}")
  static createAqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
