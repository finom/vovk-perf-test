import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjd")
export default class HjdController {
  @operation({
    summary: "Get Hjd",
  })
  @get()
  static getHjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjd",
  })
  @post("{id}")
  static createHjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
