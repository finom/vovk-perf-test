import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icq")
export default class IcqController {
  @operation({
    summary: "Get Icq",
  })
  @get()
  static getIcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icq",
  })
  @post("{id}")
  static createIcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
