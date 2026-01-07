import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exd")
export default class ExdController {
  @operation({
    summary: "Get Exd",
  })
  @get()
  static getExd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exd",
  })
  @post("{id}")
  static createExd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
