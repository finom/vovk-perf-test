import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzt")
export default class HztController {
  @operation({
    summary: "Get Hzt",
  })
  @get()
  static getHzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzt",
  })
  @post("{id}")
  static createHzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
