import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iha")
export default class IhaController {
  @operation({
    summary: "Get Iha",
  })
  @get()
  static getIha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iha",
  })
  @post("{id}")
  static createIha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
