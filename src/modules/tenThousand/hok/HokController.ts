import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hok")
export default class HokController {
  @operation({
    summary: "Get Hok",
  })
  @get()
  static getHok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hok",
  })
  @post("{id}")
  static createHok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
