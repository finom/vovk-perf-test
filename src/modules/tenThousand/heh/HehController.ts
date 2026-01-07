import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heh")
export default class HehController {
  @operation({
    summary: "Get Heh",
  })
  @get()
  static getHeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heh",
  })
  @post("{id}")
  static createHeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
