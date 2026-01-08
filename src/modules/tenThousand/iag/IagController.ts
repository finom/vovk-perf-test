import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iag")
export default class IagController {
  @operation({
    summary: "Get Iag",
  })
  @get()
  static getIag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iag",
  })
  @post("{id}")
  static createIag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
