import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gux")
export default class GuxController {
  @operation({
    summary: "Get Gux",
  })
  @get()
  static getGux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gux",
  })
  @post("{id}")
  static createGux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
