import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjc")
export default class HjcController {
  @operation({
    summary: "Get Hjc",
  })
  @get()
  static getHjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjc",
  })
  @post("{id}")
  static createHjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
