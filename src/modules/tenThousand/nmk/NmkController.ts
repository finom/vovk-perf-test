import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmk")
export default class NmkController {
  @operation({
    summary: "Get Nmk",
  })
  @get()
  static getNmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmk",
  })
  @post("{id}")
  static createNmk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
