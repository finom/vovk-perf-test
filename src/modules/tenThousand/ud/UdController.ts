import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ud")
export default class UdController {
  @operation({
    summary: "Get Ud",
  })
  @get()
  static getUd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ud",
  })
  @post("{id}")
  static createUd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
