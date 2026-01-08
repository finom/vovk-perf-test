import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("heo")
export default class HeoController {
  @operation({
    summary: "Get Heo",
  })
  @get()
  static getHeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heo",
  })
  @post("{id}")
  static createHeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
