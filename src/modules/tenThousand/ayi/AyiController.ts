import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayi")
export default class AyiController {
  @operation({
    summary: "Get Ayi",
  })
  @get()
  static getAyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayi",
  })
  @post("{id}")
  static createAyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
