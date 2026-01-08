import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdh")
export default class JdhController {
  @operation({
    summary: "Get Jdh",
  })
  @get()
  static getJdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdh",
  })
  @post("{id}")
  static createJdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
