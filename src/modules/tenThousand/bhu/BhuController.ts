import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhu")
export default class BhuController {
  @operation({
    summary: "Get Bhu",
  })
  @get()
  static getBhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhu",
  })
  @post("{id}")
  static createBhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
