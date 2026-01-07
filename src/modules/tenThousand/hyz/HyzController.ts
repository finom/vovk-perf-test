import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyz")
export default class HyzController {
  @operation({
    summary: "Get Hyz",
  })
  @get()
  static getHyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyz",
  })
  @post("{id}")
  static createHyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
