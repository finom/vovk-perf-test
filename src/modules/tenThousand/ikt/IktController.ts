import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikt")
export default class IktController {
  @operation({
    summary: "Get Ikt",
  })
  @get()
  static getIkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikt",
  })
  @post("{id}")
  static createIkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
