import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myi")
export default class MyiController {
  @operation({
    summary: "Get Myi",
  })
  @get()
  static getMyi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myi",
  })
  @post("{id}")
  static createMyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
