import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihm")
export default class IhmController {
  @operation({
    summary: "Get Ihm",
  })
  @get()
  static getIhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihm",
  })
  @post("{id}")
  static createIhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
