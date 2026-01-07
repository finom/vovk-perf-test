import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcn")
export default class FcnController {
  @operation({
    summary: "Get Fcn",
  })
  @get()
  static getFcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcn",
  })
  @post("{id}")
  static createFcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
