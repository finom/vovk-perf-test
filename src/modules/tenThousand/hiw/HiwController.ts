import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hiw")
export default class HiwController {
  @operation({
    summary: "Get Hiw",
  })
  @get()
  static getHiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiw",
  })
  @post("{id}")
  static createHiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
