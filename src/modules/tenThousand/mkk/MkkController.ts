import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkk")
export default class MkkController {
  @operation({
    summary: "Get Mkk",
  })
  @get()
  static getMkk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkk",
  })
  @post("{id}")
  static createMkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
