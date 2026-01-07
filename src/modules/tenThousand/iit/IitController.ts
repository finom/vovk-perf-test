import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iit")
export default class IitController {
  @operation({
    summary: "Get Iit",
  })
  @get()
  static getIit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iit",
  })
  @post("{id}")
  static createIit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
