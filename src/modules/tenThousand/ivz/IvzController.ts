import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivz")
export default class IvzController {
  @operation({
    summary: "Get Ivz",
  })
  @get()
  static getIvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivz",
  })
  @post("{id}")
  static createIvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
