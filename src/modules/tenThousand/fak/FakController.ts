import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faks")
export default class FakController {
  @operation({
    summary: "Get Faks",
  })
  @get()
  static getFaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fak",
  })
  @post("{id}")
  static createFak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
