import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixa")
export default class IxaController {
  @operation({
    summary: "Get Ixa",
  })
  @get()
  static getIxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixa",
  })
  @post("{id}")
  static createIxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
