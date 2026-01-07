import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgu")
export default class KguController {
  @operation({
    summary: "Get Kgu",
  })
  @get()
  static getKgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgu",
  })
  @post("{id}")
  static createKgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
