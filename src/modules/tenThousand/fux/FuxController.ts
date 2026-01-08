import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fux")
export default class FuxController {
  @operation({
    summary: "Get Fux",
  })
  @get()
  static getFux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fux",
  })
  @post("{id}")
  static createFux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
