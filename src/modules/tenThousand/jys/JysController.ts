import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jys")
export default class JysController {
  @operation({
    summary: "Get Jys",
  })
  @get()
  static getJys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jys",
  })
  @post("{id}")
  static createJys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
