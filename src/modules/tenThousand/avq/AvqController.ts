import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avq")
export default class AvqController {
  @operation({
    summary: "Get Avq",
  })
  @get()
  static getAvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avq",
  })
  @post("{id}")
  static createAvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
