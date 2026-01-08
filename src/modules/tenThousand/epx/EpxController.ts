import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epx")
export default class EpxController {
  @operation({
    summary: "Get Epx",
  })
  @get()
  static getEpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epx",
  })
  @post("{id}")
  static createEpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
