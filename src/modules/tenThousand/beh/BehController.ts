import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("beh")
export default class BehController {
  @operation({
    summary: "Get Beh",
  })
  @get()
  static getBeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beh",
  })
  @post("{id}")
  static createBeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
