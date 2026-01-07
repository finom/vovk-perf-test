import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iov")
export default class IovController {
  @operation({
    summary: "Get Iov",
  })
  @get()
  static getIov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iov",
  })
  @post("{id}")
  static createIov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
