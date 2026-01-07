import { procedure, prefix, get, post, operation } from "vovk";

@prefix("api")
export default class ApiController {
  @operation({
    summary: "Get Api",
  })
  @get()
  static getApi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Api",
  })
  @post("{id}")
  static createApi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
