import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibe")
export default class IbeController {
  @operation({
    summary: "Get Ibe",
  })
  @get()
  static getIbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibe",
  })
  @post("{id}")
  static createIbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
