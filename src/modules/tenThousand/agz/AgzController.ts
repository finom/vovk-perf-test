import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agz")
export default class AgzController {
  @operation({
    summary: "Get Agz",
  })
  @get()
  static getAgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agz",
  })
  @post("{id}")
  static createAgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
