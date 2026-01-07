import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jya")
export default class JyaController {
  @operation({
    summary: "Get Jya",
  })
  @get()
  static getJya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jya",
  })
  @post("{id}")
  static createJya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
