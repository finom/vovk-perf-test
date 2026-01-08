import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzu")
export default class LzuController {
  @operation({
    summary: "Get Lzu",
  })
  @get()
  static getLzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzu",
  })
  @post("{id}")
  static createLzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
