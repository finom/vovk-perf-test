import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ab")
export default class AbController {
  @operation({
    summary: "Get Ab",
  })
  @get()
  static getAb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ab",
  })
  @post("{id}")
  static createAb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
