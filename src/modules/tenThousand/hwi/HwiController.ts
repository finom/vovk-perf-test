import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwi")
export default class HwiController {
  @operation({
    summary: "Get Hwi",
  })
  @get()
  static getHwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwi",
  })
  @post("{id}")
  static createHwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
