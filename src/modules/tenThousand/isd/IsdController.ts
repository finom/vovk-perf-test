import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isd")
export default class IsdController {
  @operation({
    summary: "Get Isd",
  })
  @get()
  static getIsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isd",
  })
  @post("{id}")
  static createIsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
