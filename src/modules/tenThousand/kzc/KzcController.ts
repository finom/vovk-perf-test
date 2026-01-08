import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzc")
export default class KzcController {
  @operation({
    summary: "Get Kzc",
  })
  @get()
  static getKzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzc",
  })
  @post("{id}")
  static createKzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
