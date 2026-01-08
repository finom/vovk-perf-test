import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apu")
export default class ApuController {
  @operation({
    summary: "Get Apu",
  })
  @get()
  static getApu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apu",
  })
  @post("{id}")
  static createApu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
