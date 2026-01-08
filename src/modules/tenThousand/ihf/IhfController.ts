import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihf")
export default class IhfController {
  @operation({
    summary: "Get Ihf",
  })
  @get()
  static getIhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihf",
  })
  @post("{id}")
  static createIhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
