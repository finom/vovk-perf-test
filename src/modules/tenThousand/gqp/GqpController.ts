import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqp")
export default class GqpController {
  @operation({
    summary: "Get Gqp",
  })
  @get()
  static getGqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqp",
  })
  @post("{id}")
  static createGqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
