import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idu")
export default class IduController {
  @operation({
    summary: "Get Idu",
  })
  @get()
  static getIdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idu",
  })
  @post("{id}")
  static createIdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
