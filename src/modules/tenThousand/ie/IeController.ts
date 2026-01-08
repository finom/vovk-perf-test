import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ie")
export default class IeController {
  @operation({
    summary: "Get Ie",
  })
  @get()
  static getIe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ie",
  })
  @post("{id}")
  static createIe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
