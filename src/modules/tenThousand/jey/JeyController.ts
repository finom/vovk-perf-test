import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jey")
export default class JeyController {
  @operation({
    summary: "Get Jey",
  })
  @get()
  static getJey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jey",
  })
  @post("{id}")
  static createJey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
