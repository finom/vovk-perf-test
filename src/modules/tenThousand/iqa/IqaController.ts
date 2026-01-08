import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqa")
export default class IqaController {
  @operation({
    summary: "Get Iqa",
  })
  @get()
  static getIqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqa",
  })
  @post("{id}")
  static createIqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
