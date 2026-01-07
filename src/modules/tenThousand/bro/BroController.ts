import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bro")
export default class BroController {
  @operation({
    summary: "Get Bro",
  })
  @get()
  static getBro = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bro",
  })
  @post("{id}")
  static createBro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
