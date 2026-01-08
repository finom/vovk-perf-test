import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzd")
export default class DzdController {
  @operation({
    summary: "Get Dzd",
  })
  @get()
  static getDzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzd",
  })
  @post("{id}")
  static createDzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
