import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byy")
export default class ByyController {
  @operation({
    summary: "Get Byy",
  })
  @get()
  static getByy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byy",
  })
  @post("{id}")
  static createByy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
