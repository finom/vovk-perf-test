import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewj")
export default class EwjController {
  @operation({
    summary: "Get Ewj",
  })
  @get()
  static getEwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewj",
  })
  @post("{id}")
  static createEwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
