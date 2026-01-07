import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqe")
export default class IqeController {
  @operation({
    summary: "Get Iqe",
  })
  @get()
  static getIqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqe",
  })
  @post("{id}")
  static createIqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
