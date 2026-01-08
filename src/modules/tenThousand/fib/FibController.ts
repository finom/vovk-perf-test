import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fib")
export default class FibController {
  @operation({
    summary: "Get Fib",
  })
  @get()
  static getFib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fib",
  })
  @post("{id}")
  static createFib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
