import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eel")
export default class EelController {
  @operation({
    summary: "Get Eel",
  })
  @get()
  static getEel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eel",
  })
  @post("{id}")
  static createEel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
