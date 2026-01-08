import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iun")
export default class IunController {
  @operation({
    summary: "Get Iun",
  })
  @get()
  static getIun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iun",
  })
  @post("{id}")
  static createIun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
