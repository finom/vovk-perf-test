import { procedure, prefix, get, post, operation } from "vovk";

@prefix("err")
export default class ErrController {
  @operation({
    summary: "Get Err",
  })
  @get()
  static getErr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Err",
  })
  @post("{id}")
  static createErr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
