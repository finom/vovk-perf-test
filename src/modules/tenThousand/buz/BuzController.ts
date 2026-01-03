import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buzs")
export default class BuzController {
  @operation({
    summary: "Get Buzs",
  })
  @get()
  static getBuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buz",
  })
  @post("{id}")
  static createBuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
