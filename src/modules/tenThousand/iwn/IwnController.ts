import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwn")
export default class IwnController {
  @operation({
    summary: "Get Iwn",
  })
  @get()
  static getIwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwn",
  })
  @post("{id}")
  static createIwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
