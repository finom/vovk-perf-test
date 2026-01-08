import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwh")
export default class HwhController {
  @operation({
    summary: "Get Hwh",
  })
  @get()
  static getHwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwh",
  })
  @post("{id}")
  static createHwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
