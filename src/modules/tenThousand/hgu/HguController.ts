import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgu")
export default class HguController {
  @operation({
    summary: "Get Hgu",
  })
  @get()
  static getHgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgu",
  })
  @post("{id}")
  static createHgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
