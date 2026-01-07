import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idf")
export default class IdfController {
  @operation({
    summary: "Get Idf",
  })
  @get()
  static getIdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idf",
  })
  @post("{id}")
  static createIdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
