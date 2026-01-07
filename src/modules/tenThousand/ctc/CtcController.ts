import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctc")
export default class CtcController {
  @operation({
    summary: "Get Ctc",
  })
  @get()
  static getCtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctc",
  })
  @post("{id}")
  static createCtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
