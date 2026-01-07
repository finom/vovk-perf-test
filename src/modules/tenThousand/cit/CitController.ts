import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cit")
export default class CitController {
  @operation({
    summary: "Get Cit",
  })
  @get()
  static getCit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cit",
  })
  @post("{id}")
  static createCit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
