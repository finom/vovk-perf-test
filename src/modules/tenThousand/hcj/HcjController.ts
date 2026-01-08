import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcj")
export default class HcjController {
  @operation({
    summary: "Get Hcj",
  })
  @get()
  static getHcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcj",
  })
  @post("{id}")
  static createHcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
