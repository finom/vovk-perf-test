import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blu")
export default class BluController {
  @operation({
    summary: "Get Blu",
  })
  @get()
  static getBlu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blu",
  })
  @post("{id}")
  static createBlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
