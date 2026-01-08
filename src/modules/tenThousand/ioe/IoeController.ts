import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioe")
export default class IoeController {
  @operation({
    summary: "Get Ioe",
  })
  @get()
  static getIoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioe",
  })
  @post("{id}")
  static createIoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
