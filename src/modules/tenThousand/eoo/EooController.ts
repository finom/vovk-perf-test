import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoo")
export default class EooController {
  @operation({
    summary: "Get Eoo",
  })
  @get()
  static getEoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoo",
  })
  @post("{id}")
  static createEoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
