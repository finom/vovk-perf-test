import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tb")
export default class TbController {
  @operation({
    summary: "Get Tb",
  })
  @get()
  static getTb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tb",
  })
  @post("{id}")
  static createTb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
