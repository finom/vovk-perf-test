import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioi")
export default class IoiController {
  @operation({
    summary: "Get Ioi",
  })
  @get()
  static getIoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioi",
  })
  @post("{id}")
  static createIoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
