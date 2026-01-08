import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnt")
export default class HntController {
  @operation({
    summary: "Get Hnt",
  })
  @get()
  static getHnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnt",
  })
  @post("{id}")
  static createHnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
