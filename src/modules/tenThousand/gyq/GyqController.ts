import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyq")
export default class GyqController {
  @operation({
    summary: "Get Gyq",
  })
  @get()
  static getGyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyq",
  })
  @post("{id}")
  static createGyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
