import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iud")
export default class IudController {
  @operation({
    summary: "Get Iud",
  })
  @get()
  static getIud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iud",
  })
  @post("{id}")
  static createIud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
