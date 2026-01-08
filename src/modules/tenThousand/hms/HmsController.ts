import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hms")
export default class HmsController {
  @operation({
    summary: "Get Hms",
  })
  @get()
  static getHms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hms",
  })
  @post("{id}")
  static createHms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
