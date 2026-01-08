import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdh")
export default class KdhController {
  @operation({
    summary: "Get Kdh",
  })
  @get()
  static getKdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdh",
  })
  @post("{id}")
  static createKdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
