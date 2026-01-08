import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hby")
export default class HbyController {
  @operation({
    summary: "Get Hby",
  })
  @get()
  static getHby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hby",
  })
  @post("{id}")
  static createHby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
