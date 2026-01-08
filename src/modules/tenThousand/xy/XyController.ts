import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xy")
export default class XyController {
  @operation({
    summary: "Get Xy",
  })
  @get()
  static getXy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xy",
  })
  @post("{id}")
  static createXy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
