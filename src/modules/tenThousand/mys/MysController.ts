import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mys")
export default class MysController {
  @operation({
    summary: "Get Mys",
  })
  @get()
  static getMys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mys",
  })
  @post("{id}")
  static createMys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
