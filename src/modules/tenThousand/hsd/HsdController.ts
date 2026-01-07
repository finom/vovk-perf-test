import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsd")
export default class HsdController {
  @operation({
    summary: "Get Hsd",
  })
  @get()
  static getHsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsd",
  })
  @post("{id}")
  static createHsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
