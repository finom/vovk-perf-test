import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoz")
export default class AozController {
  @operation({
    summary: "Get Aoz",
  })
  @get()
  static getAoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoz",
  })
  @post("{id}")
  static createAoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
