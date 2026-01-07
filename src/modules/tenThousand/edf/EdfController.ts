import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edf")
export default class EdfController {
  @operation({
    summary: "Get Edf",
  })
  @get()
  static getEdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edf",
  })
  @post("{id}")
  static createEdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
