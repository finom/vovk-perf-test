import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwn")
export default class HwnController {
  @operation({
    summary: "Get Hwn",
  })
  @get()
  static getHwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwn",
  })
  @post("{id}")
  static createHwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
