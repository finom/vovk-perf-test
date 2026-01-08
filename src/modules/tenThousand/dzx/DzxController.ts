import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzx")
export default class DzxController {
  @operation({
    summary: "Get Dzx",
  })
  @get()
  static getDzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzx",
  })
  @post("{id}")
  static createDzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
