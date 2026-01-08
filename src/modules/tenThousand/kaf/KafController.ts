import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kaf")
export default class KafController {
  @operation({
    summary: "Get Kaf",
  })
  @get()
  static getKaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaf",
  })
  @post("{id}")
  static createKaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
