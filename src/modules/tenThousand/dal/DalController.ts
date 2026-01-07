import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dal")
export default class DalController {
  @operation({
    summary: "Get Dal",
  })
  @get()
  static getDal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dal",
  })
  @post("{id}")
  static createDal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
