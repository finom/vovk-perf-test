import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyg")
export default class EygController {
  @operation({
    summary: "Get Eyg",
  })
  @get()
  static getEyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyg",
  })
  @post("{id}")
  static createEyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
