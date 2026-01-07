import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iym")
export default class IymController {
  @operation({
    summary: "Get Iym",
  })
  @get()
  static getIym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iym",
  })
  @post("{id}")
  static createIym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
