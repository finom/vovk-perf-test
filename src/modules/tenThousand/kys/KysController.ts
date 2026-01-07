import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kys")
export default class KysController {
  @operation({
    summary: "Get Kys",
  })
  @get()
  static getKys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kys",
  })
  @post("{id}")
  static createKys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
