import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkl")
export default class KklController {
  @operation({
    summary: "Get Kkl",
  })
  @get()
  static getKkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkl",
  })
  @post("{id}")
  static createKkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
