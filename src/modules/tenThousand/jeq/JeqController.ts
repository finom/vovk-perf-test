import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jeq")
export default class JeqController {
  @operation({
    summary: "Get Jeq",
  })
  @get()
  static getJeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeq",
  })
  @post("{id}")
  static createJeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
