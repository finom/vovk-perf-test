import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bus")
export default class BusController {
  @operation({
    summary: "Get Bus",
  })
  @get()
  static getBus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bus",
  })
  @post("{id}")
  static createBus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
