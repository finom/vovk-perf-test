import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inq")
export default class InqController {
  @operation({
    summary: "Get Inq",
  })
  @get()
  static getInq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inq",
  })
  @post("{id}")
  static createInq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
