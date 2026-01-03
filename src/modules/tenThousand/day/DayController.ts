import { procedure, prefix, get, post, operation } from "vovk";

@prefix("days")
export default class DayController {
  @operation({
    summary: "Get Days",
  })
  @get()
  static getDays = procedure({
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
