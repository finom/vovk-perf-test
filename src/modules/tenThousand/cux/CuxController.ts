import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cux")
export default class CuxController {
  @operation({
    summary: "Get Cux",
  })
  @get()
  static getCux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cux",
  })
  @post("{id}")
  static createCux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
