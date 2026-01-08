import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijh")
export default class IjhController {
  @operation({
    summary: "Get Ijh",
  })
  @get()
  static getIjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijh",
  })
  @post("{id}")
  static createIjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
