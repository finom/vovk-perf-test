import { procedure, prefix, get, post, operation } from "vovk";

@prefix("um")
export default class UmController {
  @operation({
    summary: "Get Um",
  })
  @get()
  static getUm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Um",
  })
  @post("{id}")
  static createUm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
