import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ich")
export default class IchController {
  @operation({
    summary: "Get Ich",
  })
  @get()
  static getIch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ich",
  })
  @post("{id}")
  static createIch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
