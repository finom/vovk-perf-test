import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzv")
export default class DzvController {
  @operation({
    summary: "Get Dzv",
  })
  @get()
  static getDzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzv",
  })
  @post("{id}")
  static createDzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
