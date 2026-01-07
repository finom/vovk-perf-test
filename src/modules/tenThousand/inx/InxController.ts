import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inx")
export default class InxController {
  @operation({
    summary: "Get Inx",
  })
  @get()
  static getInx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inx",
  })
  @post("{id}")
  static createInx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
