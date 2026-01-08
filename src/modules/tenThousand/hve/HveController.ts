import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hve")
export default class HveController {
  @operation({
    summary: "Get Hve",
  })
  @get()
  static getHve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hve",
  })
  @post("{id}")
  static createHve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
