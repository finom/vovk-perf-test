import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljf")
export default class LjfController {
  @operation({
    summary: "Get Ljf",
  })
  @get()
  static getLjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljf",
  })
  @post("{id}")
  static createLjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
