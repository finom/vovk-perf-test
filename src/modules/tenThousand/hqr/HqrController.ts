import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqr")
export default class HqrController {
  @operation({
    summary: "Get Hqr",
  })
  @get()
  static getHqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqr",
  })
  @post("{id}")
  static createHqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
