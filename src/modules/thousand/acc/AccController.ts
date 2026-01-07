import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acc")
export default class AccController {
  @operation({
    summary: "Get Acc",
  })
  @get()
  static getAcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acc",
  })
  @post("{id}")
  static createAcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
