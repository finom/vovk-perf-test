import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiw")
export default class IiwController {
  @operation({
    summary: "Get Iiw",
  })
  @get()
  static getIiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiw",
  })
  @post("{id}")
  static createIiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
