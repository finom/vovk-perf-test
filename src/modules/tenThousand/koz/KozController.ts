import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koz")
export default class KozController {
  @operation({
    summary: "Get Koz",
  })
  @get()
  static getKoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koz",
  })
  @post("{id}")
  static createKoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
