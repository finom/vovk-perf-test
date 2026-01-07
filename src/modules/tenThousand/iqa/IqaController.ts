import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqa")
export default class IqaController {
  @operation({
    summary: "Get Iqa",
  })
  @get()
  static getIqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqa",
  })
  @post("{id}")
  static createIqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
