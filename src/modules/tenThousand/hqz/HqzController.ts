import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqz")
export default class HqzController {
  @operation({
    summary: "Get Hqz",
  })
  @get()
  static getHqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqz",
  })
  @post("{id}")
  static createHqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
