import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqx")
export default class IqxController {
  @operation({
    summary: "Get Iqx",
  })
  @get()
  static getIqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqx",
  })
  @post("{id}")
  static createIqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
