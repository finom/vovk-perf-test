import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieo")
export default class IeoController {
  @operation({
    summary: "Get Ieo",
  })
  @get()
  static getIeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ieo",
  })
  @post("{id}")
  static createIeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
