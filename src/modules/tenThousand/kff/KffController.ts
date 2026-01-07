import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kff")
export default class KffController {
  @operation({
    summary: "Get Kff",
  })
  @get()
  static getKff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kff",
  })
  @post("{id}")
  static createKff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
