import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqe")
export default class HqeController {
  @operation({
    summary: "Get Hqe",
  })
  @get()
  static getHqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqe",
  })
  @post("{id}")
  static createHqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
