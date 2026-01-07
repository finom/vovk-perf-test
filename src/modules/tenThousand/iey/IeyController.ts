import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iey")
export default class IeyController {
  @operation({
    summary: "Get Iey",
  })
  @get()
  static getIey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iey",
  })
  @post("{id}")
  static createIey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
