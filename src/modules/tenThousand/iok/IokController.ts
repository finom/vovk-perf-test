import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iok")
export default class IokController {
  @operation({
    summary: "Get Iok",
  })
  @get()
  static getIok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iok",
  })
  @post("{id}")
  static createIok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
