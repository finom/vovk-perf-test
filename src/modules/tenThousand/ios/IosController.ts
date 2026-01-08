import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ios")
export default class IosController {
  @operation({
    summary: "Get Ios",
  })
  @get()
  static getIos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ios",
  })
  @post("{id}")
  static createIos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
