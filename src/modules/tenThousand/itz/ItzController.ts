import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itz")
export default class ItzController {
  @operation({
    summary: "Get Itz",
  })
  @get()
  static getItz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itz",
  })
  @post("{id}")
  static createItz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
