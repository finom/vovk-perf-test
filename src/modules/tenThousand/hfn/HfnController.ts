import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfn")
export default class HfnController {
  @operation({
    summary: "Get Hfn",
  })
  @get()
  static getHfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfn",
  })
  @post("{id}")
  static createHfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
