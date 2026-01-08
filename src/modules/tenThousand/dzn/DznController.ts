import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzn")
export default class DznController {
  @operation({
    summary: "Get Dzn",
  })
  @get()
  static getDzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzn",
  })
  @post("{id}")
  static createDzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
