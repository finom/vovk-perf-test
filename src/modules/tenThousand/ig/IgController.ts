import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ig")
export default class IgController {
  @operation({
    summary: "Get Ig",
  })
  @get()
  static getIg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ig",
  })
  @post("{id}")
  static createIg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
