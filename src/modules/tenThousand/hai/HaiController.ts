import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hai")
export default class HaiController {
  @operation({
    summary: "Get Hai",
  })
  @get()
  static getHai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hai",
  })
  @post("{id}")
  static createHai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
