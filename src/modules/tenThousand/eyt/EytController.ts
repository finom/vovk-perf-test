import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyt")
export default class EytController {
  @operation({
    summary: "Get Eyt",
  })
  @get()
  static getEyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyt",
  })
  @post("{id}")
  static createEyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
