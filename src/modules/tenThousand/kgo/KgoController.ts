import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgo")
export default class KgoController {
  @operation({
    summary: "Get Kgo",
  })
  @get()
  static getKgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgo",
  })
  @post("{id}")
  static createKgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
