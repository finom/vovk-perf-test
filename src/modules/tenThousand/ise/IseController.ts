import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ise")
export default class IseController {
  @operation({
    summary: "Get Ise",
  })
  @get()
  static getIse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ise",
  })
  @post("{id}")
  static createIse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
