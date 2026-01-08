import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyh")
export default class IyhController {
  @operation({
    summary: "Get Iyh",
  })
  @get()
  static getIyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyh",
  })
  @post("{id}")
  static createIyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
