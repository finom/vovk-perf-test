import { procedure, prefix, get, post, operation } from "vovk";

@prefix("day")
export default class DayController {
  @operation({
    summary: "Get Day",
  })
  @get()
  static getDay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Day",
  })
  @post("{id}")
  static createDay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
