import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyi")
export default class FyiController {
  @operation({
    summary: "Get Fyi",
  })
  @get()
  static getFyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyi",
  })
  @post("{id}")
  static createFyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
