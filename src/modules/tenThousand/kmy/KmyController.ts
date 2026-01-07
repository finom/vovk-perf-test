import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmy")
export default class KmyController {
  @operation({
    summary: "Get Kmy",
  })
  @get()
  static getKmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmy",
  })
  @post("{id}")
  static createKmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
