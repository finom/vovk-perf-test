import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iys")
export default class IysController {
  @operation({
    summary: "Get Iys",
  })
  @get()
  static getIys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iys",
  })
  @post("{id}")
  static createIys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
