import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gys")
export default class GysController {
  @operation({
    summary: "Get Gys",
  })
  @get()
  static getGys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gys",
  })
  @post("{id}")
  static createGys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
