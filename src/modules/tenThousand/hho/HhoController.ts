import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hho")
export default class HhoController {
  @operation({
    summary: "Get Hho",
  })
  @get()
  static getHho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hho",
  })
  @post("{id}")
  static createHho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
