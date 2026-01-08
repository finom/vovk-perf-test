import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kau")
export default class KauController {
  @operation({
    summary: "Get Kau",
  })
  @get()
  static getKau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kau",
  })
  @post("{id}")
  static createKau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
