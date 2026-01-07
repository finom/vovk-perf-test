import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqe")
export default class CqeController {
  @operation({
    summary: "Get Cqe",
  })
  @get()
  static getCqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqe",
  })
  @post("{id}")
  static createCqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
