import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqd")
export default class MqdController {
  @operation({
    summary: "Get Mqd",
  })
  @get()
  static getMqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqd",
  })
  @post("{id}")
  static createMqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
