import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igl")
export default class IglController {
  @operation({
    summary: "Get Igl",
  })
  @get()
  static getIgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igl",
  })
  @post("{id}")
  static createIgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
