import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inp")
export default class InpController {
  @operation({
    summary: "Get Inp",
  })
  @get()
  static getInp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inp",
  })
  @post("{id}")
  static createInp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
