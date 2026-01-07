import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jev")
export default class JevController {
  @operation({
    summary: "Get Jev",
  })
  @get()
  static getJev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jev",
  })
  @post("{id}")
  static createJev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
