import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieh")
export default class IehController {
  @operation({
    summary: "Get Ieh",
  })
  @get()
  static getIeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ieh",
  })
  @post("{id}")
  static createIeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
