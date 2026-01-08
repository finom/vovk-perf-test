import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihz")
export default class IhzController {
  @operation({
    summary: "Get Ihz",
  })
  @get()
  static getIhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihz",
  })
  @post("{id}")
  static createIhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
