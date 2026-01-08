import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iaf")
export default class IafController {
  @operation({
    summary: "Get Iaf",
  })
  @get()
  static getIaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaf",
  })
  @post("{id}")
  static createIaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
