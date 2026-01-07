import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddj")
export default class DdjController {
  @operation({
    summary: "Get Ddj",
  })
  @get()
  static getDdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddj",
  })
  @post("{id}")
  static createDdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
