import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aey")
export default class AeyController {
  @operation({
    summary: "Get Aey",
  })
  @get()
  static getAey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aey",
  })
  @post("{id}")
  static createAey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
