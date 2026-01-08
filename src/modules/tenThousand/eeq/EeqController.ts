import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eeq")
export default class EeqController {
  @operation({
    summary: "Get Eeq",
  })
  @get()
  static getEeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeq",
  })
  @post("{id}")
  static createEeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
