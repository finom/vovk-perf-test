import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ams")
export default class AmsController {
  @operation({
    summary: "Get Ams",
  })
  @get()
  static getAms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ams",
  })
  @post("{id}")
  static createAms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
