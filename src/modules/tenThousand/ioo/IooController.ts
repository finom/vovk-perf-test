import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioo")
export default class IooController {
  @operation({
    summary: "Get Ioo",
  })
  @get()
  static getIoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioo",
  })
  @post("{id}")
  static createIoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
