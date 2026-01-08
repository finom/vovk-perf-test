import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioh")
export default class IohController {
  @operation({
    summary: "Get Ioh",
  })
  @get()
  static getIoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioh",
  })
  @post("{id}")
  static createIoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
