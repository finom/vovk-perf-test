import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iob")
export default class IobController {
  @operation({
    summary: "Get Iob",
  })
  @get()
  static getIob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iob",
  })
  @post("{id}")
  static createIob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
