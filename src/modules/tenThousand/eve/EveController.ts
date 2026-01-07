import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eve")
export default class EveController {
  @operation({
    summary: "Get Eve",
  })
  @get()
  static getEve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eve",
  })
  @post("{id}")
  static createEve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
