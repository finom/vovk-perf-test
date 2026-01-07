import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jah")
export default class JahController {
  @operation({
    summary: "Get Jah",
  })
  @get()
  static getJah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jah",
  })
  @post("{id}")
  static createJah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
