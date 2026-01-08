import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iej")
export default class IejController {
  @operation({
    summary: "Get Iej",
  })
  @get()
  static getIej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iej",
  })
  @post("{id}")
  static createIej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
