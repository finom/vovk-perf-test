import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwv")
export default class KwvController {
  @operation({
    summary: "Get Kwv",
  })
  @get()
  static getKwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwv",
  })
  @post("{id}")
  static createKwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
