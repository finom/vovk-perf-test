import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icw")
export default class IcwController {
  @operation({
    summary: "Get Icw",
  })
  @get()
  static getIcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icw",
  })
  @post("{id}")
  static createIcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
