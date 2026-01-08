import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbo")
export default class HboController {
  @operation({
    summary: "Get Hbo",
  })
  @get()
  static getHbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbo",
  })
  @post("{id}")
  static createHbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
