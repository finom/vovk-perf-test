import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kof")
export default class KofController {
  @operation({
    summary: "Get Kof",
  })
  @get()
  static getKof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kof",
  })
  @post("{id}")
  static createKof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
