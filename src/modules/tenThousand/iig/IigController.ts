import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iig")
export default class IigController {
  @operation({
    summary: "Get Iig",
  })
  @get()
  static getIig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iig",
  })
  @post("{id}")
  static createIig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
