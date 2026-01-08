import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqz")
export default class IqzController {
  @operation({
    summary: "Get Iqz",
  })
  @get()
  static getIqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqz",
  })
  @post("{id}")
  static createIqz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
