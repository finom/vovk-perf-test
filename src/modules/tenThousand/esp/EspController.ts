import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esp")
export default class EspController {
  @operation({
    summary: "Get Esp",
  })
  @get()
  static getEsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esp",
  })
  @post("{id}")
  static createEsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
