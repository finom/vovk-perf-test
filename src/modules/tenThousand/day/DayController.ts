import { procedure, prefix, get, post, operation } from "vovk";

@prefix("day")
export default class DayController {
  @operation({
    summary: "Get Day",
  })
  @get()
  static getDay = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Day",
  })
  @post("{id}")
  static createDay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
