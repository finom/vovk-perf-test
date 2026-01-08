import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jve")
export default class JveController {
  @operation({
    summary: "Get Jve",
  })
  @get()
  static getJve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jve",
  })
  @post("{id}")
  static createJve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
