import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irs")
export default class IrsController {
  @operation({
    summary: "Get Irs",
  })
  @get()
  static getIrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irs",
  })
  @post("{id}")
  static createIrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
