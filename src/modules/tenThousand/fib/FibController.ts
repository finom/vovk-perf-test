import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fib")
export default class FibController {
  @operation({
    summary: "Get Fib",
  })
  @get()
  static getFib = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fib",
  })
  @post("{id}")
  static createFib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
