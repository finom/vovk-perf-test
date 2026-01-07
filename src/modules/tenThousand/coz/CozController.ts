import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coz")
export default class CozController {
  @operation({
    summary: "Get Coz",
  })
  @get()
  static getCoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coz",
  })
  @post("{id}")
  static createCoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
