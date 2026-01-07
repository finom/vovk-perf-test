import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krz")
export default class KrzController {
  @operation({
    summary: "Get Krz",
  })
  @get()
  static getKrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krz",
  })
  @post("{id}")
  static createKrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
