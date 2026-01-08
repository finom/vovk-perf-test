import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhr")
export default class BhrController {
  @operation({
    summary: "Get Bhr",
  })
  @get()
  static getBhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhr",
  })
  @post("{id}")
  static createBhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
