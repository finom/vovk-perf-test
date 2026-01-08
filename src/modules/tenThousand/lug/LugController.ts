import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lug")
export default class LugController {
  @operation({
    summary: "Get Lug",
  })
  @get()
  static getLug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lug",
  })
  @post("{id}")
  static createLug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
