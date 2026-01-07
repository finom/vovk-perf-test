import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ett")
export default class EttController {
  @operation({
    summary: "Get Ett",
  })
  @get()
  static getEtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ett",
  })
  @post("{id}")
  static createEtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
