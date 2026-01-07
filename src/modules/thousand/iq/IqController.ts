import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iq")
export default class IqController {
  @operation({
    summary: "Get Iq",
  })
  @get()
  static getIq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iq",
  })
  @post("{id}")
  static createIq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
