import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhh")
export default class JhhController {
  @operation({
    summary: "Get Jhh",
  })
  @get()
  static getJhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhh",
  })
  @post("{id}")
  static createJhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
