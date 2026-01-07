import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jol")
export default class JolController {
  @operation({
    summary: "Get Jol",
  })
  @get()
  static getJol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jol",
  })
  @post("{id}")
  static createJol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
