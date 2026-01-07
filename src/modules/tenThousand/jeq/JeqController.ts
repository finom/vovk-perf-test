import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeq")
export default class JeqController {
  @operation({
    summary: "Get Jeq",
  })
  @get()
  static getJeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeq",
  })
  @post("{id}")
  static createJeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
