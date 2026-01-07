import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dva")
export default class DvaController {
  @operation({
    summary: "Get Dva",
  })
  @get()
  static getDva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dva",
  })
  @post("{id}")
  static createDva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
