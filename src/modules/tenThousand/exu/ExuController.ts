import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exu")
export default class ExuController {
  @operation({
    summary: "Get Exu",
  })
  @get()
  static getExu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exu",
  })
  @post("{id}")
  static createExu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
