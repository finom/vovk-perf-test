import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hin")
export default class HinController {
  @operation({
    summary: "Get Hin",
  })
  @get()
  static getHin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hin",
  })
  @post("{id}")
  static createHin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
