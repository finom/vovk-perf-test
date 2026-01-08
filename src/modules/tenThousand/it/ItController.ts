import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("it")
export default class ItController {
  @operation({
    summary: "Get It",
  })
  @get()
  static getIt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create It",
  })
  @post("{id}")
  static createIt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
