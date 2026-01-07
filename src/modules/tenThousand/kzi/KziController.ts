import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzi")
export default class KziController {
  @operation({
    summary: "Get Kzi",
  })
  @get()
  static getKzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzi",
  })
  @post("{id}")
  static createKzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
