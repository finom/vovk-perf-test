import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqs")
export default class AqsController {
  @operation({
    summary: "Get Aqs",
  })
  @get()
  static getAqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqs",
  })
  @post("{id}")
  static createAqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
