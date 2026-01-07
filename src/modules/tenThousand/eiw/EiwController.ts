import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiw")
export default class EiwController {
  @operation({
    summary: "Get Eiw",
  })
  @get()
  static getEiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiw",
  })
  @post("{id}")
  static createEiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
