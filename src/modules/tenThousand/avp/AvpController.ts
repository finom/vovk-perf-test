import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avp")
export default class AvpController {
  @operation({
    summary: "Get Avp",
  })
  @get()
  static getAvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avp",
  })
  @post("{id}")
  static createAvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
