import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iek")
export default class IekController {
  @operation({
    summary: "Get Iek",
  })
  @get()
  static getIek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iek",
  })
  @post("{id}")
  static createIek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
