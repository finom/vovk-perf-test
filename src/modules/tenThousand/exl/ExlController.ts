import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exl")
export default class ExlController {
  @operation({
    summary: "Get Exl",
  })
  @get()
  static getExl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exl",
  })
  @post("{id}")
  static createExl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
