import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wb")
export default class WbController {
  @operation({
    summary: "Get Wb",
  })
  @get()
  static getWb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wb",
  })
  @post("{id}")
  static createWb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
