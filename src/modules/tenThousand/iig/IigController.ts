import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iig")
export default class IigController {
  @operation({
    summary: "Get Iig",
  })
  @get()
  static getIig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iig",
  })
  @post("{id}")
  static createIig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
