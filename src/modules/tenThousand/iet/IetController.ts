import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iet")
export default class IetController {
  @operation({
    summary: "Get Iet",
  })
  @get()
  static getIet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iet",
  })
  @post("{id}")
  static createIet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
