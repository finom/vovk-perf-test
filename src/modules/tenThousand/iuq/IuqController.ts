import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuq")
export default class IuqController {
  @operation({
    summary: "Get Iuq",
  })
  @get()
  static getIuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuq",
  })
  @post("{id}")
  static createIuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
