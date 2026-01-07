import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfd")
export default class KfdController {
  @operation({
    summary: "Get Kfd",
  })
  @get()
  static getKfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfd",
  })
  @post("{id}")
  static createKfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
