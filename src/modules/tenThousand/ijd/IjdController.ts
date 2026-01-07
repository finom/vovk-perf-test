import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijd")
export default class IjdController {
  @operation({
    summary: "Get Ijd",
  })
  @get()
  static getIjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijd",
  })
  @post("{id}")
  static createIjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
