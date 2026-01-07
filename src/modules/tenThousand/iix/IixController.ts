import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iix")
export default class IixController {
  @operation({
    summary: "Get Iix",
  })
  @get()
  static getIix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iix",
  })
  @post("{id}")
  static createIix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
