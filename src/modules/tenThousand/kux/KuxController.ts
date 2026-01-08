import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kux")
export default class KuxController {
  @operation({
    summary: "Get Kux",
  })
  @get()
  static getKux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kux",
  })
  @post("{id}")
  static createKux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
