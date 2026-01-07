import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hci")
export default class HciController {
  @operation({
    summary: "Get Hci",
  })
  @get()
  static getHci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hci",
  })
  @post("{id}")
  static createHci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
