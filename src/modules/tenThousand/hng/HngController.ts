import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hng")
export default class HngController {
  @operation({
    summary: "Get Hng",
  })
  @get()
  static getHng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hng",
  })
  @post("{id}")
  static createHng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
