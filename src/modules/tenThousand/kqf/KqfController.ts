import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqf")
export default class KqfController {
  @operation({
    summary: "Get Kqf",
  })
  @get()
  static getKqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqf",
  })
  @post("{id}")
  static createKqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
