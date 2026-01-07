import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ds")
export default class DsController {
  @operation({
    summary: "Get Ds",
  })
  @get()
  static getDs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ds",
  })
  @post("{id}")
  static createDs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
