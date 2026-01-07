import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isn")
export default class IsnController {
  @operation({
    summary: "Get Isn",
  })
  @get()
  static getIsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isn",
  })
  @post("{id}")
  static createIsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
