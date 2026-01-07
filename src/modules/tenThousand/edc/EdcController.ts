import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edc")
export default class EdcController {
  @operation({
    summary: "Get Edc",
  })
  @get()
  static getEdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edc",
  })
  @post("{id}")
  static createEdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
