import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhj")
export default class JhjController {
  @operation({
    summary: "Get Jhj",
  })
  @get()
  static getJhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhj",
  })
  @post("{id}")
  static createJhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
