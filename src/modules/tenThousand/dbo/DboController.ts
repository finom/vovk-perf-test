import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbo")
export default class DboController {
  @operation({
    summary: "Get Dbo",
  })
  @get()
  static getDbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbo",
  })
  @post("{id}")
  static createDbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
