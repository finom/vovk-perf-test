import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlf")
export default class JlfController {
  @operation({
    summary: "Get Jlf",
  })
  @get()
  static getJlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlf",
  })
  @post("{id}")
  static createJlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
