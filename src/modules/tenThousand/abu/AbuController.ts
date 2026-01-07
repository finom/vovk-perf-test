import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abu")
export default class AbuController {
  @operation({
    summary: "Get Abu",
  })
  @get()
  static getAbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abu",
  })
  @post("{id}")
  static createAbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
