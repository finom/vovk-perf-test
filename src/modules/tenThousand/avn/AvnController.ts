import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avn")
export default class AvnController {
  @operation({
    summary: "Get Avn",
  })
  @get()
  static getAvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avn",
  })
  @post("{id}")
  static createAvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
