import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iiq")
export default class IiqController {
  @operation({
    summary: "Get Iiq",
  })
  @get()
  static getIiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiq",
  })
  @post("{id}")
  static createIiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
