import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adx")
export default class AdxController {
  @operation({
    summary: "Get Adx",
  })
  @get()
  static getAdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adx",
  })
  @post("{id}")
  static createAdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
