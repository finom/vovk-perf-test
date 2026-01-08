import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("haq")
export default class HaqController {
  @operation({
    summary: "Get Haq",
  })
  @get()
  static getHaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haq",
  })
  @post("{id}")
  static createHaq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
