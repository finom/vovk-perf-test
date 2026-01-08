import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igg")
export default class IggController {
  @operation({
    summary: "Get Igg",
  })
  @get()
  static getIgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igg",
  })
  @post("{id}")
  static createIgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
