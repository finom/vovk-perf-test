import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ek")
export default class EkController {
  @operation({
    summary: "Get Ek",
  })
  @get()
  static getEk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ek",
  })
  @post("{id}")
  static createEk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
