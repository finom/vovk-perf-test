import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifp")
export default class IfpController {
  @operation({
    summary: "Get Ifp",
  })
  @get()
  static getIfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifp",
  })
  @post("{id}")
  static createIfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
