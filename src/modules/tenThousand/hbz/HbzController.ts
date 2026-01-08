import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbz")
export default class HbzController {
  @operation({
    summary: "Get Hbz",
  })
  @get()
  static getHbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbz",
  })
  @post("{id}")
  static createHbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
