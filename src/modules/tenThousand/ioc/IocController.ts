import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioc")
export default class IocController {
  @operation({
    summary: "Get Ioc",
  })
  @get()
  static getIoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioc",
  })
  @post("{id}")
  static createIoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
