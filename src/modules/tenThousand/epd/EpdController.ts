import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epd")
export default class EpdController {
  @operation({
    summary: "Get Epd",
  })
  @get()
  static getEpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epd",
  })
  @post("{id}")
  static createEpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
