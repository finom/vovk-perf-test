import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mey")
export default class MeyController {
  @operation({
    summary: "Get Mey",
  })
  @get()
  static getMey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mey",
  })
  @post("{id}")
  static createMey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
