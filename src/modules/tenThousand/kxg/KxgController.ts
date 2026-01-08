import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxg")
export default class KxgController {
  @operation({
    summary: "Get Kxg",
  })
  @get()
  static getKxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxg",
  })
  @post("{id}")
  static createKxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
