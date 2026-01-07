import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fri")
export default class FriController {
  @operation({
    summary: "Get Fri",
  })
  @get()
  static getFri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fri",
  })
  @post("{id}")
  static createFri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
