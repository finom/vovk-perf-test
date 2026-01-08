import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axz")
export default class AxzController {
  @operation({
    summary: "Get Axz",
  })
  @get()
  static getAxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axz",
  })
  @post("{id}")
  static createAxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
