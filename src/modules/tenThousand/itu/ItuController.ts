import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itu")
export default class ItuController {
  @operation({
    summary: "Get Itu",
  })
  @get()
  static getItu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itu",
  })
  @post("{id}")
  static createItu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
