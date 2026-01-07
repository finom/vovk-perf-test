import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbu")
export default class JbuController {
  @operation({
    summary: "Get Jbu",
  })
  @get()
  static getJbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbu",
  })
  @post("{id}")
  static createJbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
