import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iid")
export default class IidController {
  @operation({
    summary: "Get Iid",
  })
  @get()
  static getIid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iid",
  })
  @post("{id}")
  static createIid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
