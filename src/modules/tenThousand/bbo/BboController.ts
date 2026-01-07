import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbo")
export default class BboController {
  @operation({
    summary: "Get Bbo",
  })
  @get()
  static getBbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbo",
  })
  @post("{id}")
  static createBbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
