import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isc")
export default class IscController {
  @operation({
    summary: "Get Isc",
  })
  @get()
  static getIsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isc",
  })
  @post("{id}")
  static createIsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
