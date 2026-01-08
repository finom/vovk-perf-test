import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjp")
export default class HjpController {
  @operation({
    summary: "Get Hjp",
  })
  @get()
  static getHjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjp",
  })
  @post("{id}")
  static createHjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
